import Link from "next/link";

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="projects-area pt-130 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">Latest Works</span>
              <h2>
                My Popular <span>Projects</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project8.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <h2>
                <Link
                  legacyBehavior
                  target="_blank"
                  href="https://apps.apple.com/mn/app/spacetime-mn/id6446931509"
                >
                  SpaceTime
                </Link>
              </h2>
              <p>
                "Spacetime" is a streamlined time registration app designed to
                simplify how companies monitor employee hours. It functions
                directly on smartphones, utilizing location services and local
                network connections for precise tracking. Additionally,
                Spacetime supports fingerprint device integration for enhanced
                security. Its smart request management feature fosters easy
                communication between employees and managers, optimizing
                scheduling and time-off requests. This app is an essential tool
                for modern, efficient workforce management.
              </p>
              {/* <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p> */}
              <Link
                legacyBehavior
                target="_blank"
                href="https://apps.apple.com/mn/app/spacetime-mn/id6446931509"
              >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project9.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <h2>
                <Link
                  legacyBehavior
                  target="_blank"
                  href="https://apps.apple.com/mn/app/red-mn/id1642247596"
                >
                  RedRock Catering
                </Link>
              </h2>
              <p>
                "RedRock" is an app tailored for roster workers in mining and
                construction, offering easy room booking and meal ordering up to
                three times daily. It caters to workers' schedules and
                preferences, allowing for changes in room services and meals via
                the app. This enhances their stay and dining experiences. For
                catering companies like RedRock LLC, the app streamlines partner
                service management, promoting efficient coordination and worker
                satisfaction. Its straightforward interface and comprehensive
                features make it vital for quality hospitality and food services
                in challenging industrial settings.
              </p>
              <Link
                legacyBehavior
                target="_blank"
                href="https://apps.apple.com/mn/app/red-mn/id1642247596"
              >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="row mb-40">
          <div className="col-lg-12">
            <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-40">
                <h2>
                  Fintech Lending Suite:{" "}
                  <span className="color-primary">Amar, Unipay, & More</span>
                </h2>
                <p>
                  In the rapidly evolving fintech space, I've developed a suite
                  of lending apps tailored to the modern financial ecosystem.
                  Each app, including Amar and Unipay, leverages cutting-edge
                  technology to revolutionize the lending experience. These
                  applications calculate credit scores with precision by
                  analyzing a lender’s history, official registrations, income,
                  and insurance details within Mongolia. They automate the
                  contract process with lending partners, streamlining
                  operations and enhancing user experience.
                </p>
                <p>
                  While each app in this suite shares a core functionality, they
                  are distinguished by unique UI designs and specialized
                  features tailored to meet diverse user needs. This collection
                  exemplifies my versatility in creating applications that not
                  only solve complex problems but also prioritize user
                  engagement and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project2.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <h2>
                <Link
                  href="https://apps.apple.com/mn/app/amar-mn/id6447161911"
                  target="_blank"
                >
                  Amar
                </Link>
              </h2>
              <Link
                legacyBehavior
                href="https://apps.apple.com/mn/app/amar-mn/id6447161911"
                target="_blank"
              >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center pb-25">
          <div className="col-lg-6 ">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project1.png" alt="Project" />
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 ">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <h2>
                <Link
                  href="https://apps.apple.com/mn/app/unipay-mn/id6460586807"
                  target="_blank"
                >
                  UniPay
                </Link>
              </h2>
              {/* <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p> */}
              <Link
                legacyBehavior
                href="https://apps.apple.com/mn/app/unipay-mn/id6460586807"
                target="_blank"
              >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project3.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <h2>
                <Link
                  legacyBehavior
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://apps.apple.com/mn/app/khanguud/id6471460747"
                >
                  Khanguud
                </Link>
              </h2>
              {/* <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p> */}
              <Link
                legacyBehavior
                target="_blank"
                href="https://apps.apple.com/mn/app/khanguud/id6471460747"
              >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center pb-25">
          <div className="col-lg-6 ">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project10.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <Link
                legacyBehavior
                target="_blank"
                href="https://apps.apple.com/mn/app/if-mn/id1661604695"
              >
                <h2>IF.mn</h2>
              </Link>
              {/* <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p> */}
              <Link
                legacyBehavior
                href="https://apps.apple.com/mn/app/if-mn/id1661604695"
                target="_blank"
              >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project11.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <h2>
                <Link
                  legacyBehavior
                  target="_blank"
                  href="https://apps.apple.com/mn/app/ugloo/id1644283746"
                >
                  Ugloo
                </Link>
              </h2>
              {/* <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p> */}
              <Link
                legacyBehavior
                target="_blank"
                href="https://apps.apple.com/mn/app/ugloo/id1644283746"
              >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 ">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project6.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <h2>Easy</h2>
              {/* <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p> */}
              {/* <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link> */}
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project7.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <h2>
                <Link
                  legacyBehavior
                  target="_blank"
                  href="https://apps.apple.com/mn/app/leasing-mn/id1660729488"
                >
                  Leasing.mn
                </Link>
              </h2>
              {/* <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p> */}
              <Link
                legacyBehavior
                target="_blank"
                href="https://apps.apple.com/mn/app/leasing-mn/id1660729488"
              >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row align-items-center pb-25">
          <div className="col-lg-6">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project4.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <h2>
                <Link
                  legacyBehavior
                  target="_blank"
                  href="https://apps.apple.com/mn/app/tcash-mn/id6448323144"
                >
                  TCash
                </Link>
              </h2>
              {/* <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p> */}
              <Link
                legacyBehavior
                target="_blank"
                href="https://apps.apple.com/mn/app/tcash-mn/id6448323144"
              >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="row align-items-center pb-25">
          <div className="col-lg-6 order-lg-2">
            <div className="project-image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/project4.jpg" alt="Project" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 ms-auto">
            <div className="project-content wow fadeInRight delay-0-2s">
              <span className="sub-title">Mobile App</span>
              <h2>
                <Link
                  legacyBehavior
                  target="_blank"
                  href="https://apps.apple.com/mn/app/metalend/id1662309076"
                >
                  MetaLend
                </Link>
              </h2>
              {/* <p>
                Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                inventore veritatis architecto beatae
              </p> */}
              <Link
                legacyBehavior
                target="_blank"
                href="https://apps.apple.com/mn/app/metalend/id1662309076"
              >
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="/projects">
            <a className="theme-btn">
              View More Projects <i className="far fa-angle-right" />
            </a>
          </Link>
        </div> */}
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Projects;

export const Projects2 = () => {
  return (
    <section
      id="projects"
      className="projects-area-four pt-135 rpt-100 pb-100 rpb-70 rel z-1"
    >
      <div className="container container-1200">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
              <span className="sub-title mb-15">
                <i className="flaticon-asterisk-1" /> Explore my projects
              </span>
              <h2>Explore My Projects</h2>
            </div>
          </div>
        </div>
        <div className="row gap-50">
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-md-3">
            <div className="project-item style-four wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/projects/project-two5.jpg"
                  alt="Project"
                />
                <Link legacyBehavior href="/project-details">
                  <a className="hover-box">
                    <span>View More</span>
                    <i className="far fa-arrow-up" />
                  </a>
                </Link>
              </div>
              <div className="content">
                <h5 className="title">
                  <Link legacyBehavior href="/project-details">
                    <a>Digital Marketing</a>
                  </Link>
                </h5>
                <span className="sub-title">Art , Direction</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <div className="project-details-btn mb-50">
              <Link legacyBehavior href="/project-details">
                <a className="more-btn wow zoomIn delay-0-2s">
                  <span>More</span>
                  <i className="fal fa-arrow-up" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
