import styles from "./Styles.module.css"
// import "./normal.css"

export const CSS_Modules = () => {
  return (
    <div className={styles.css}>
      <h2>Some H2</h2>

      <h2>Other h2</h2>

      <h2>More h2!</h2>

      <div>
        <ul>
          <li>
            Some text
            <span>
              <ul>
                <li>
                  <p>This text</p>
                </li>
              </ul>
              <p>Other text</p>
            </span>
          </li>
          <li>
            <p>Funny isn't?</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
