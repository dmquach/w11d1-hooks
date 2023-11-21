import { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
  // console.log('Message', size);
  const [message, setMessage] = useState("")

  const [classSize, setClassSize] = useState("")

  useEffect(() => {
    let cname = ""
    switch (size) {
      case "m":
        cname = "medium"
        break
      case "l":
        cname = "large"
        break
      case "xl":
        cname ="xlarge"
        break;
      default:
      cname = "small"
      break

    }
    setClassSize(cname)
    // console.log('PictureDisplay size', size);
  }, [size]);

  useEffect(() => {
    if (featherCount === 0){
      setMessage("Oh my! Your bird is naked!")
    } else {
      setMessage(`Your bird has ${featherCount} feathers`)
    }
  }, [featherCount])

  return (
    <div className={`message ${classSize}`}>
      {message}
    </div>
  );
};

export default Message;