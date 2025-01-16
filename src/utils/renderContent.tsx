import ReactHtmlParser from "react-html-parser";
export const renderContent = (content: string) => {
  const parsedContent = ReactHtmlParser(content);

  return parsedContent.map((element, index) => {
    if (element.type === "h1") {
      return (
        <h1 key={index} className="text-2xl font-bold mb-2 ">
          {element.props.children}
        </h1>
      );
    } else if (element.type === "h2") {
      return (
        <h2 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h2>
      );
    } else if (element.type === "h3") {
      return (
        <h3 key={index} className="text-xl font-bold mb-2 ">
          {element.props.children}
        </h3>
      );
    } else if (element.type === "p") {
      return (
        <p key={index} className="mb-2">
          {element.props.children}
        </p>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-center"
    ) {
      return (
        <div key={index} className="text-center mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-right"
    ) {
      return (
        <div key={index} className="text-right mb-2">
          {element.props.children}
        </div>
      );
    } else if (
      element.type === "div" &&
      element.props.className === "ql-align-left"
    ) {
      return (
        <div key={index} className="text-left mb-2">
          {element.props.children}
        </div>
      );
    } else {
      return null;
    }
  });
};
