export function Signup() {
    return (
        <section className="signup-section" id="signup">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-10 col-lg-8 mx-auto text-center">
                        <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
                        <form className="form-signup d-flex flex-column flex-sm-row">
                            <input className="form-control flex-fill me-0 me-sm-2 mb-3 mb-sm-0" id="inputEmail"
                                   type="email" placeholder="Enter email address..."/>
                            <button className="btn btn-primary" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}