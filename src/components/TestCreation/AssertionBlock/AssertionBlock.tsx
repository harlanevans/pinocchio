import React, { useContext, useState } from "react";
import { TestContext } from "../../../providers/TestProvider";
// STYLES
import {
  Input,
  Select,
  SubHeader,
} from "../../../assets/stylesheets/styled-components/Global";
import "./AssertionBlock.scss";

const AssertionBlock = (props) => {
  const [userInput, setUserInput] = useState("");
  const [assertionChoice, setAssertionChoice] = useState("");
  const [callbackChoice, setCallbackChoice] = useState("");
  const [selector, setSelector] = useState('');

  const { handleAssertionsChoice, handleAssertionsUserInput, handleCallbackChoice, handleSelectionChoice, test} = useContext(TestContext)
  // expect (html node) --> assertions compared to (a user input)

  const assertionArrays = ["to.be.equal", "to.not.equal"];
  const evalCallbacks = ['getValue', 'getLength', 'getInnerText'];

  const renderCallbackOptions = () => {
    return evalCallbacks.map((callback) => {
      return <option value={callback}>{callback}</option>;
    });
  };

  const renderAssertionOptions = () => {
    return assertionArrays.map((assert) => {
      return <option value={assert}>{assert}</option>;
    });
  };


  return (
    <div id="assertCont">
      <SubHeader>Assertion Block</SubHeader>
      <div id="formCont">
      <div id="selectAssert">
        <Input
          placeholder="Selector"
          value={selector}
          onChange={(e) => {setSelector(e.target.value); handleSelectionChoice(e.target.value, props.itIndex)}}
        />
      <Select
          value={callbackChoice}
          onChange={(e) => {setCallbackChoice(e.target.value); handleCallbackChoice(e.target.value, props.itIndex)}}
        >
          <option value="" disabled>
            Callbacks
          </option>
          {renderCallbackOptions()}
        </Select>

        <Select
          value={assertionChoice}
          onChange={(e) => {setAssertionChoice(e.target.value); handleAssertionsChoice(e.target.value, props.itIndex)}}
        >
          <option value="" disabled>
            Assertions
          </option>
          {renderAssertionOptions()}
        </Select>
      </div>
        <Input
          placeholder="User input"
          value={userInput}
          onChange={(e) => {setUserInput(e.target.value); handleAssertionsUserInput(e.target.value, props.itIndex)}}
        />
      </div>
    </div>
  );
};

export default AssertionBlock;