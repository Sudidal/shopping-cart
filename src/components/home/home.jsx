import classes from "./home.module.css"

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className={classes.section}>
        <p><strong>Oxide Store</strong> is the biggest store in Iraq</p>
        <img className={classes.image} src="https://images.unsplash.com/photo-1613332098721-054a53462d12?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default Home