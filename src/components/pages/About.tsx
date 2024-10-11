export default function About() {
  return (
    <>
      <div className="row g-4">
        <div className="col-md-12 bg-body-secondary rounded">
          <h1>About</h1>
          <h2>What is this all about?</h2>
          <p>
            This is an all purpose mildly bootstrap-based scaffold for learning
            about React.
          </p>
        </div>

        <div className="col-md-4">
          <h3>Create Apps as Pages</h3>
          <p>
            One way to use this would be to add small learning apps as
            individual pages using basic, manual routing.
          </p>
        </div>
        <div className="col-md-4">
          <h3>Change to use Data-driven Routes</h3>
          <p>Need to learn how to build a dynamically multi-route app.</p>
        </div>
        <div className="col-md-4">
          <h3>Use Imagination</h3>
          <p>
            This is a springboard. Use it for whatever you want. The main point
            is to avoid wasting time with boilerplate.
          </p>
        </div>
      </div>
    </>
  );
}
