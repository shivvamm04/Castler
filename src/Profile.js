import "./styles.css";

export default function Profile(props) {
  const card = props.card.map((el, id) => {
    return (
      <div key={id} className="fl">
        <div className="card">
          <img src={el.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{el.first_name + " " + el.last_name}</p>
            <p className="card-text">{el.email}</p>
          </div>
        </div>
        <div>
          <b>id - {el.id}</b>
          <br />
          <b>name - {el.first_name}</b>
          <b> {el.last_name}</b> <br />
          <b>email - {el.first_name}</b>
          <br />
          <b>Random paragraph (</b>
          <i>
            <del>
              If you're developing an application, you'll want to make sure
              you're testing it under conditions that closely simulate a
              production environment. In production, you'll have an army of
              users banging away at your app and filling your database with
              data, which puts stress on your code. If you're hand-entering data
              into a test environment one record at a time using the UI, you're
              never going to build up the volume and variety of data that your
              app will accumulate in a few days in production. Worse, the data
              you enter will be biased towards your own usage patterns and won't
              match real-world usage, leaving important bugs undiscovered)
            </del>
          </i>
          <b>)</b>
        </div>
      </div>
    );
  });
  return <div className="abc">{card}</div>;
}
