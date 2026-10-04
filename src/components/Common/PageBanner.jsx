import "./Style/PageBanner.css";

function PageBanner({ title, currentPage }) {
  return (
    <section className="page-banner">

      <div className="page-banner-content">

        <div className="page-breadcrumb">

          <span>Home</span>

          <i className="bi bi-chevron-right"></i>

          <span className="current-page">
            {currentPage}
          </span>

        </div>

      </div>

    </section>
  );
}

export default PageBanner;