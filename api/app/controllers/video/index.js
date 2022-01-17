const { send_response } = require('../../utils/app.util');
const { verifyToken } = require('../../utils/jwt.util');
const { uploadFile } = require('../../utils/s3.util');
const db = require("../../models");
const { sendFCM_NV } = require('../../firebase');
const Video = db.video;

exports.createVideo = function (event) {
    var _data = event.body;
    const file = event.files.doc_video;
    console.log("request", _data, file);
    uploadFile(file, 'myvideos').then((fileurl) => {
        // console.log(fileurl);
        // console.log(new Date());
        // Video.create({
        //     profile_id: _data.user_id,
        //     video_link: fileurl,
        //     video_type: _data.type,
        //     video_note: _data.note,
        //     video_status: 'A',
        // }).then(video => {
        //     context.done(null, send_response(200, video));
        // }).catch(err => {
        //     console.log(err);
        //     context.done(null, send_response(500, { message: err.message }));
        // });
    }).catch(err => {
        console.log('err', err);
        // context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
    })
}

exports.createVideo_test = function (event, context) {
    var _data = event.body;
    const file = event.files.doc_video;
    uploadFile(file, 'myvideos').then((fileurl) => {
        console.log(fileurl);
        console.log(new Date());
        Video.create({
            profile_id: _data.user_id,
            video_link: fileurl,
            video_type: _data.type,
            video_note: _data.note,
            video_status: 'A',
        }).then(video => {
            sendFCM_NV(video);

            context.done(null, send_response(200, video));
        }).catch(err => {
            console.log(err);
            context.done(null, send_response(500, { message: err.message }));
        });
    }).catch(err => {
        console.log('err', err);
        context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
    })
}

exports.viewVideo = function (event, context) {

    verifyToken(event.headers).then(valid => {
        var filter = {
            include: [
                {
                    model: db.profile,
                    attributes: ['profile_id', 'profile_first_name', 'profile_last_name', 'profile_biz_name', 'profile_img'],
                    as: 'merchant_info'
                }],
            where: {
                id: event.pathParams.id
            }
        };

        Video.findOne(filter).then(post => {
            context.done(null, send_response(200, post));
        }).catch(err => {
            context.done(null, send_response(500, { message: err.message }));
        });
    }).catch(err => {
        context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
    })
}


exports.listVideos_all = function (event, context) {
        var filter = {
            include: [
                {
                    model: db.profile,
                    attributes: ['profile_id', 'profile_first_name', 'profile_last_name', 'profile_biz_name', 'profile_img'],
                    as: 'merchant_info'
                }],
            order: [['created_at', 'DESC']]
        };
        Video.findAndCountAll(filter).then(videos => {
            context.done(null, send_response(200, videos));
        }).catch(err => {
            context.done(null, send_response(500, { message: err.message }));
        });
}


exports.deletevideo = function (event, context) {
    verifyToken(event.headers).then(auther => {
        Video.destroy({
            where: { id: event.pathParams.video_id }
        }).then(category => {
            context.done(null, send_response(200, { message: 'Video deleted successfully' }));
        }).catch(err => {
            context.done(null, send_response(500, { message: err.message }));
        });
    }).catch(err => {
        context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
    })
}

exports.listVideos = function (event, context) {
    verifyToken(event.headers).then(valid => {
        var filter = {
            where: {
                profile_id: event.pathParams.user_id,
            },
            order: [['created_at', 'DESC']]
        };
        Video.findAndCountAll(filter).then(videos => {
            context.done(null, send_response(200, videos));
        }).catch(err => {
            context.done(null, send_response(500, { message: err.message }));
        });
    }).catch(err => {
        context.done(null, send_response(err.status_code ? err.status_code : 400, { message: err.message }));
    })
}