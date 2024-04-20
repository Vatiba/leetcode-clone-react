import { forwardRef } from "react";
import ReactQuill, { ReactQuillProps } from "react-quill";
// quill styles
import 'react-quill/dist/quill.snow.css';

type TextEditorProps = ReactQuillProps & {
}

const TextEditor = forwardRef<ReactQuill, TextEditorProps>((props, ref) => {
   return (
      <ReactQuill
         theme="snow"
         modules={modules}
         ref={ref}
         {...props}
      />
   )
});


const modules = {
   toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'code'],
      ['clean']
   ],
};

export default TextEditor