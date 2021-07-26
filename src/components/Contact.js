function Contact() {
  return (
    <div className="container">
      <div className="card">
        <h2>Contact Me</h2>
        <h5>
          <i className="fas fa-phone-alt"></i> 1 (631) 374-0059
        </h5>
        <h5>
          <a className="my-link" href="mailto:james.mgalantino@gmail.com">
            <i className="far fa-envelope"></i> james.mgalantino@gmail
          </a>
        </h5>
        <h5>
          <a
            className="my-link"
            href="https://github.com/jimbopulos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </h5>
        <h5>
          <a
            className="my-link"
            href="https://www.linkedin.com/in/james-galantino-0aab6a16a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </h5>
        <h5>
          <a
            className="my-link"
            href="documents/JMG-Resume-7-8-21.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="far fa-file-alt"></i> Resume
          </a>
        </h5>
      </div>
    </div>
  );
}

export default Contact;
