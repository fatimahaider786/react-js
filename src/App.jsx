import "./App.css"
function App() {
  return (
    <div className="container">
      <h1 className="heading">Fatima haider</h1>
      <p>I am student of AI stack</p>
      <hr />
      <br />
      <div>
        <h1>Password</h1>
        {/* email */}
        <label htmlFor="email"> Email*</label>
        <input type="email" name="@fatimahaider" placeholder="enter email" id="" />
      </div>

      <div>
        {/* password */}
        <label htmlFor="password"> Password*</label>
        <input type="password" name="password" placeholder="enter password" id="" />
      </div>

      {/* embading content */}
      <h1>Embading Content</h1>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/1AS3eGuDJq0?si=73bIw0tV917vpltF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.760531711154!2d74.33999707464876!3d31.47577294934588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1764483790921!5m2!1sen!2s" width="560" height="315" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      {/* event listner */}
      <h1>EVENT LISTNER</h1>
      <br />
      <div className="button">
        <button id="btnDblClick" onClick={() => alert('button clicked')}> Double click</button>
      </div>
      <br />
      <div className="buttons">
        <input type="box" placeholder="enter any place" onClick={() => alert("click hogya ha 😎")} />
      </div>

      {/* tabels */}
      <h1>Tabels</h1>
      <table className="tabel">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">second</th>
            <th scope="col">ruuner up</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>aiman</td>
            <td>aiza</td>
            <td>ahmad</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>hania</td>
            <td>fatima</td>
            <td>ali</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>faiz</td>
            <td>rahat</td>
            <td>haider</td>
          </tr>
         </tbody>
      </table>

      {/* list of ul /ol */}

      <h1>My Skills</h1>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>React</li>
</ul>  

    </div>
  )
}
export default App