const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="hear_text text-center"> {/* the underscore means we are getting the sylt from global.css */}
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> AI Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia is an open-source AI prompting tool for modern world to discover,
            create and share creative prompts.
        </p>
    </section>

  )
}

export default Home