import { Link, routes } from '@redwoodjs/router'

const SomePagePage = () => {
  return (
    <>
      <h1>SomePagePage</h1>
      <p>
        Find me in <code>./web/src/pages/SomePagePage/SomePagePage.js</code>
      </p>
      <p>
        My default route is named <code>somePage</code>, link to me with `
        <Link to={routes.somePage()}>SomePage</Link>`
      </p>
    </>
  )
}

export default SomePagePage
