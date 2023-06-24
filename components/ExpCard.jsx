import "@styles/components/exp.scss";

const ExpCard = (props) => {
  return (
    <div className="exp-card">
      <div className="exp-top">
        {props.title}

        <a className="date">{props.date}</a>
      </div>
      <div className="exp-bottom">{props.desc}</div>
    </div>
  );
};

export default ExpCard;
