class UploadController {
    redirectSendFile(req, res) {
        return res.redirect('sendFile');
    }
}

module.exports = new UploadController();