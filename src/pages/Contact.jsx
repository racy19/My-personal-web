const Contact = (props) => {
    return (
        <div className="container">
            <div id="kontakt">
                <h1 className="mt-5">Kontaktní formulář</h1>
                <iframe frameborder="0" scrolling="no" width="500px" height="220px" name="iframe-contact-form" id="iframe-contact-form" className="mt-5" title="contact-form"
                    src="https://www.itnetwork.cz/api/Service-MailForm/66d178247ff193.02602961">
                </iframe>
            </div>
        </div>
    );
};

export default Contact;