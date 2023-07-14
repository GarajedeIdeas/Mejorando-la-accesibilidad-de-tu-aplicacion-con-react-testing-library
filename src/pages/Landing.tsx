import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <>
      <h1>Live coding</h1>
      <p className="read-the-docs">
        <a href="https://webaim.org/projects/million/#wcag">WebAim</a>
      </p>
      <p lang="en">
        96.3% of home pages had detected WCAG 2 failures! This improved very
        slightly from 96.8% in 2022. Over the last 4 years, the pages with
        detectable WCAG failures has decreased by only 1.5% from 97.8%
      </p>
      <div className="card" lang="en">
        <table width={700}>
          <caption>
            <h4>Home pages with most common WCAG 2 failures</h4>
          </caption>
          <tbody>
            <tr>
              <th>WCAG Failure Type</th>
              <th>% of home pages in 2023</th>
              <th>% of home pages in 2022</th>
              <th>% of home pages in 2021</th>
              <th>% of home pages in 2020</th>
              <th>% of home pages in 2019</th>
            </tr>
            <tr>
              <td>
                <Link to="/contrast">Low contrast text</Link>
              </td>
              <td>83.6%</td>
              <td>83.9%</td>
              <td>86.4%</td>
              <td>86.3%</td>
              <td>85.3%</td>
            </tr>
            <tr>
              <td>
                <Link to="alt">Missing alternative text for images</Link>
              </td>
              <td>58.2%</td>
              <td>55.4%</td>
              <td>60.6%</td>
              <td>66.0%</td>
              <td>68.0%</td>
            </tr>
            <tr>
              <td>
                <Link to="empty-links">Empty links</Link>
              </td>
              <td>50.1%</td>
              <td>49.7%</td>
              <td>51.3%</td>
              <td>59.9%</td>
              <td>58.1%</td>
            </tr>
            <tr>
              <td>
                <Link to="labels">Missing form input labels</Link>
              </td>
              <td>45.9%</td>
              <td>46.1%</td>
              <td>54.4%</td>
              <td>53.8%</td>
              <td>52.8%</td>
            </tr>
            <tr>
              <td>
                <Link to="empty-buttons">Empty buttons</Link>
              </td>
              <td>27.5%</td>
              <td>27.2%</td>
              <td>26.9%</td>
              <td>28.7%</td>
              <td>25.0%</td>
            </tr>
            <tr>
              <td>
                <Link to="lang">Missing document language</Link>
              </td>
              <td>18.6%</td>
              <td>22.3%</td>
              <td>28.9%</td>
              <td>28.0%</td>
              <td>33.1%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The top 5 WCAG 2 failures are the same as in 2022. The top 5 failures
        account for 78.3% of all detected failures.
      </p>
    </>
  );
};
