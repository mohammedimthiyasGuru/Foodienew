const auth = require("../../configs/auth.config");
const { send_response } = require('../../utils/app.util')
const db = require("../../models");
const User = db.user;
const Profile = db.profile;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

async function signin(event, context) {
    let _login = event.body;

    User.findOne({
        where: {
            user_login: _login.email
        }
    }).then(user => {
        if (!user) {
            var error = { status_code: '500', message: 'Invalid account'};
            throw error;
        }
        else if (user && user.user_status == 'N') {
            var error = { status_code: '500', message: 'Account not activated'};
            throw error;
        }else {
            var passwordIsValid = bcrypt.compareSync(
                _login.password,
                user.user_password || ""
            );
        if (!passwordIsValid) {
            var error = { status_code: '500', message: 'Invalid password'};
            throw error;   
        }


        var _token = jwt.sign({ id: user.user_id }, auth.secret, {
            expiresIn: 86400 // 24 hours
        });

        Profile.findOne({
            where: {
                profile_id: user.profile_id
            }
        }).then(profile => {
            context.done(null, send_response(200, {
                user: {
                    user_id: user.user_id,
                    user_name: profile.profile_first_name,
                    user_full_name: profile.profile_first_name + ' ' + profile.profile_last_name,
                    user_email: profile.profile_email,
                    user_mobile: profile.profile_contact,
                    profile_id: profile.profile_id,
                    profile_img: profile.profile_img,
                    business_name: profile.profile_biz_name,
                    role_id: profile.role_id
                },
                key: {
                    token: _token
                }
            }));
        });
    }
    }).catch(err => {
        context.done(null, send_response(err.status_code ? err.status_code : 500, { message: err.message }));
    });
}
exports.signin = signin;