import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import "./MarkdownField.css";
const MarkdownField = (props: MarkdownFieldProps) => {
  const { values } = useFormikContext<any>();

  return (
    <div className={`mb-3 form-markdown`}>
      <label htmlFor={props.field}>{props.displayName}</label>
      <div>
        <Field
          id={props.field}
          name={props.field}
          as="textarea"
          className={`form-textarea`}
        />
      </div>
      <div>
        <div className={`markdown-container`}>
          <label>{props.displayName} (Preview) :</label>
          <ReactMarkdown>{values[props.field]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownField;

interface MarkdownFieldProps {
  displayName: string;
  field: string;
}
