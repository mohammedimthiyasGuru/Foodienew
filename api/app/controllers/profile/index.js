const { send_response } = require('../../utils/app.util')
const { verifyToken } = require('../../utils/jwt.util')
const { uploadFile } = require('../../utils/s3.util')
const db = require("../../models");
const User = db.user;
const Role = db.role;
const Profile = db.profile;
const Video = db.video;

exports.viewProfile = function (event, context) {
    verifyToken(event.headers).then(auther => {
        Profile.findOne({
            include: [{
                model: Role,
                attributes: ['role_id', 'role_name'],
                required: true
            }, {
                model: User,
                attributes: ['user_id', 'user_login']
            }],
            where: {
                profile_id: event.pathParams.profile_id
            }
        }).then(profile => {
            context.done(null, send_response(200, profile));
        }).catch(err => {
            context.done(null, send_response(500, { message: err.message }));
        });
    }).catch(err => {
        context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
    })
}



exports.viewProfile_view = function (event, context) {
        Profile.findOne({
            include: [{
                model: Role,
                attributes: ['role_id', 'role_name'],
                required: true
            }, {
                model: User,
                attributes: ['user_id', 'user_login']
            }],
            where: {
                profile_id: event.pathParams.profile_id
            }
        }).then(profile => {
            context.done(null, send_response(200, profile));
        }).catch(err => {
            context.done(null, send_response(500, { message: err.message }));
        });
}

exports.checkmobile = function (event, context) {
        Profile.findOne({
            where: {
                profile_contact: event.pathParams.profile_contact
            }
        }).then(profile => {
            context.done(null, send_response(200, profile));
        }).catch(err => {
            context.done(null, send_response(500, { message: err.message }));
        });
}



exports.statelist = function (event, context) {
    Profile.findAndCountAll({
        where: {
            country: event.pathParams.profile_contact
        }
    }).then(profile => {
        context.done(null, send_response(200, profile));
    }).catch(err => {
        context.done(null, send_response(500, { message: err.message }));
    });
}




exports.updateProfile = function (event, context) {
    var _data = event.body;

    verifyToken(event.headers).then(auther => {
        Profile.update({
            profile_first_name: _data.profile_first_name,
            profile_last_name: _data.profile_last_name,
            profile_biz_name: _data.profile_biz_name,
            profile_biz_type: _data.profile_biz_type,
            profile_email: _data.profile_email,
            profile_contact: _data.profile_contact,
            profile_address: _data.profile_address,
            profile_dob: _data.profile_dob,
            profile_gender: _data.profile_gender,
            profile_location: _data.profile_location,
            profile_summary: _data.profile_summary,
            profile_facebook: _data.profile_facebook,
            profile_youtube: _data.profile_youtube,
            profile_instagram: _data.profile_instagram,
            profile_twitter: _data.profile_twitter,
            idprofiletwo : _data.idprofiletwo,
            idprofileone : _data.idprofileone,
            location_lat : _data.location_lat || 0,
            location_lng : _data.location_lng || 0,
            bank_name : _data.bank_name,
            bank_acc_no : _data.bank_acc_no,
            bank_ifsc_no : _data.bank_ifsc_no,
            bank_branch : _data.bank_branch,
            p_country_name : _data.p_country_name,
            p_state_name : _data.p_state_name,
            p_city_name : _data.p_city_name,
            bank_ifsc_no : _data.bank_ifsc_no,
            updated_by: auther
        }, {
            where: {
                profile_id: event.pathParams.profile_id
            }
        }).then(profile => {
            context.done(null, send_response(200, { message: 'Profile updated successfully' }));
        }).catch(err => {
            context.done(null, send_response(500, { message: err.message }));
        });
    }).catch(err => {
        context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
    })
}

exports.uploadProfileImg = function (event, context) {
    const file = event.files.profileimg;
    verifyToken(event.headers).then(auther => {
        uploadFile(file, 'profileimgs').then((fileurl) => {
            Profile.update({
                profile_img: fileurl,
                updated_by: auther
            }, {
                where: {
                    profile_id: event.pathParams.profile_id
                }
            }).then(profile => {
                context.done(null, send_response(200, { message: 'Profile image uploaded successfully' }));
            }).catch(err => {
                context.done(null, send_response(500, { message: err.message }));
            });
        }).catch(err => {
            context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
        })
    }).catch(err => {
        context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
    })
}

exports.uploadMenucard = function (event, context) {
    const file = event.files.menucard;

    verifyToken(event.headers).then(auther => {
        uploadFile(file, 'menucards').then((fileurl) => {
            
            Profile.update({
                profile_doc_menu: fileurl,
                updated_by: auther
            }, {
                where: {
                    profile_id: event.pathParams.profile_id
                }
            }).then(profile => {
                context.done(null, send_response(200, { message: 'Menucard uploaded successfully' }));
            }).catch(err => {
                context.done(null, send_response(500, { message: err.message }));
            });
        }).catch(err => {
            context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
        })
    }).catch(err => {
        context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
    })
}





exports.uploadidprofileoneImg = function (event, context) {
    const file = event.files.profileimg;
        uploadFile(file, 'profileimgs').then((fileurl) => {
        context.done(null, send_response(200, { message: 'Profile image uploaded successfully',url : fileurl }));
        }).catch(err => {
            console.log(err);
            context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
        })   
}

exports.uploadidprofiletwoImg = function (event, context) {
    const file = event.files.profileimg;
        uploadFile(file, 'profileimgs').then((fileurl) => {
            Profile.update({
                idprofiletwo: fileurl
            }, {
                where: {
                    profile_id: event.pathParams.profile_id
                }
            }).then(profile => {
                context.done(null, send_response(200, { message: 'Profile image uploaded successfully' }));
            }).catch(err => {
                context.done(null, send_response(500, { message: err.message }));
            });
        }).catch(err => {
            context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
        })
}

exports.uploadidprofilethreeImg = function (event, context) {
    // const file = event.files.profileimg;
            var _data = event.body;
            console.log(_data);
            console.log(new Date());
            Video.create({
                profile_id: _data.user_id,
                video_link: _data.filepath,
                video_type: _data.type,
                video_note: _data.note,
                video_status: 'A',
            }).then(video => {
                context.done(null, send_response(200, video));
            }).catch(err => {
                console.log(err);
                context.done(null, send_response(500, { message: err.message }));
            });
}













