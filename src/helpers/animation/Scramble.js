import Scramble from "react-scramble";

const ScrambleAnimation = (props) => {
  return (
    <Scramble
      autoStart={props.start}
      text={props.text}
      speed="medium"
      steps={[
        {
          roll: 15,
          action: "+",
          type: "all",
        },
        {
          action: "-",
          type: "forward",
        },
      ]}
    />
  );
};

export default ScrambleAnimation;
