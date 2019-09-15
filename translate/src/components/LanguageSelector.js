import React from "react";
import LanguageContext from '../context/LanguageContext';
class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select language:
        <i
          className="flag gb"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag is"
          onClick={() => this.context.onLanguageChange("icelandic")}
        />
      </div>
    );
  }
}

export default LanguageSelector;