jQuery(document).ready(function($) {
    $('.upload-menu-image-button').on('click', function(e) {
        e.preventDefault();
        const target = $(this).data('target');
        const customUploader = wp.media({
            title: 'Select Menu Image',
            button: {
                text: 'Use Image'
            },
            multiple: false
        });
        customUploader.on('select', function() {
            const attachment = customUploader.state().get('selection').first().toJSON();
            $(target).val(attachment.url);
        });
        customUploader.open();
    });
});