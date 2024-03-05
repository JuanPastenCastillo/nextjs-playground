import Norway_SVG from "@/assets/Norway_SVG.svg"
import Norway from "@/public/norway.jpg"
import Pigeon_WEBP from "@/public/pigeon.webp"
import Image from "next/image"
import Link from "next/link"
import { DialogComponent } from "./DialogComponent"
import { INDEX_StaticToTestWrapper } from "./styles/INDEX_StaticToTestWrapper"

export const INDEX_StaticToTest = () => {
  return (
    <INDEX_StaticToTestWrapper>
      <article>
        <header>
          <h1>This is a h1</h1>
        </header>
      </article>

      <header>
        <h2>This is a h2</h2>
      </header>
      <header>
        <h3>This is a h3</h3>
      </header>
      <header>
        <h4>This is a h4</h4>
      </header>
      <header>
        <h5>This is a h5</h5>
      </header>

      <header>
        <h6>This is a h6</h6>
      </header>

      <nav>
        <ul data-testid="LI_options">
          <li>Li Element: 3</li>
          <li>Li Element: 2</li>
          <li>Li Element: 1</li>
        </ul>

        <ul>
          <li>Li Element: 1</li>
          <li>Li Element: 2</li>
        </ul>
      </nav>

      <nav>
        <ol>
          <li>Li Element: A</li>
          <li>Li Element: B</li>
          <li>Li Element: C</li>
        </ol>
      </nav>

      <a
        href="https://duckduckgo.com/"
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noreferrer">
        Some link to duckduckgo with anchor tag element
      </a>

      <Link
        href="https://bing.com"
        target="_blank"
        referrerPolicy="no-referrer">
        Some link to duckduckgo with NEXTJS 13 element
      </Link>

      <img
        // src={Pigeon_WEBP}
        src="public/norway.jpg"
        alt="some image of a Pigeon, html tag"
        width={9999}
        height={9999}
      />
      <div>
        <Image
          src={Pigeon_WEBP}
          alt="some image of a Pigeon, nextjs component"
          width={9999}
          height={9999}
        />
      </div>

      <Image
        src={Norway}
        alt="some image of a Norwegian place"
        // fill={true}
        width={9999}
        height={9999}
      />
      <Image
        src={Norway}
        alt="some image of a Norwegian place"
        // fill={true}
        width={9999}
        height={9999}
        data-testid="special image"
      />

      <Image
        src={Norway_SVG}
        alt="Norway flag"
        // fill={true}
        // sizes="100%"
        width={9999}
        height={9999}
      />

      <div>
        <input
          data-testid="input"
          type="button"
          value="like button in a HTML input tag"
        />
        <label data-testid="first_label">
          First checkbox
          <input
            data-testid="input"
            type="checkbox"
          />
        </label>

        <label data-testid="second_label">
          Second checkbox
          <input
            data-testid="input"
            type="checkbox"
          />
        </label>

        <label data-testid="parent of color">
          Parent of color
          <input
            data-testid="input"
            type="color"
            name="head"
            value="#e66465"
            aria-label="color_input_here"
          />
        </label>

        <label
          data-testid="date_input"
          htmlFor="date_here">
          DATE HERE
        </label>

        <input
          data-testid="date_input"
          aria-label="date_input_here"
          id="date_here"
          type="date"
        />
        <input
          data-testid="input"
          type="datetime-local"
        />
        <input
          aria-label="email_input"
          data-testid="input"
          type="email"
        />
        <input
          data-testid="input"
          type="file"
        />
        <input
          data-testid="input"
          type="hidden"
        />
        <input
          data-testid="input"
          type="image"
        />
        <input
          data-testid="input"
          type="month"
        />
        <input
          data-testid="input"
          type="number"
        />
        <input
          data-testid="input"
          type="password"
        />
        <input
          data-testid="input"
          type="radio"
        />
        <input
          data-testid="input"
          type="range"
        />
        <input
          data-testid="input"
          type="reset"
        />

        <input
          data-testid="input"
          type="search"
        />
        <input
          data-testid="input"
          type="submit"
        />
        <input
          data-testid="input"
          type="tel"
        />
        <input
          data-testid="input"
          type="time"
        />
        <input
          data-testid="input"
          type="url"
        />
        <input
          data-testid="input"
          type="week"
        />

        <input
          data-testid="input"
          type="text"
        />
        <input
          data-testid="input"
          type="email"
        />
        <textarea />
      </div>

      <aside data-testid="specific aside">Some Random text, Aside</aside>
      <aside>Second aside</aside>

      <form>
        <label>
          This is the label
          <input
            data-testid="input"
            aria-label="input checkbox inside form at the side of input"
            type="checkbox"
          />
        </label>
      </form>

      <details data-testid="detail">
        <summary data-testid="summary">
          Some details here, this is the sumary
        </summary>
        This is displayed on open without any on it
      </details>

      <DialogComponent />

      <p>Some new paragraph, minor change</p>

      {/* <Norway_Func /> */}

      {/* If is NOT a descendant of `article`, `aside`, `main`, `nav` or `section` is `role=generic`  */}
      <footer
        data-testid="footer without article as father"
        aria-label="footer without article as father - aria">
        <p>Some footer text here</p>

        <p>
          Text of paragraph <span>and a text inside the P HTML TAG</span>
        </p>
      </footer>

      {/* If is a descendant of `article`, `aside`, `main`, `nav` or `section` is `role=article`, but the `role=article` is in the tag element header and article   */}
      <article>
        <footer>
          <p>Some footer text here</p>
          <p>
            Text of paragraph <span>and a text inside the P HTML TAG</span>
          </p>
        </footer>
      </article>
    </INDEX_StaticToTestWrapper>
  )
}
