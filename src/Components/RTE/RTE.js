import "./rte.css";
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, defaultValue = "" }) {
  const [editorLoaded, setEditorLoaded] = useState(false);

  const handleEditorInit = () => {
    setEditorLoaded(true);
  };

  return (
    <>
      {!editorLoaded && <div className="hypnotic my-[30px] mx-auto"></div>}
      <div className="w-full h-[700px] flex flex-wrap justify-center">
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey="549i6ouwh2vxzj3hxiu8ih1zq6zcmsiw858dcwrvveawo9xq"
              initialValue={defaultValue}
              init={{
                resize: false,
                branding: false,
                quickbars_selection_toolbar: "bold italic underline fontfamily fontsize forecolor backcolor removeformat hr",
                menubar: "favs file edit view insert format tools table help",
                plugins: [
                  "advlist",
                  "autolink",
                  "link",
                  "image",
                  "lists",
                  "charmap",
                  "preview",
                  "anchor",
                  "pagebreak",
                  "searchreplace",
                  "wordcount",
                  "visualblocks",
                  "visualchars",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "emoticons",
                  "help",
                ],
                toolbar:
                  "undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons",
                content_style: "body { font-size:18px; background-color: #edf2fb; height: 800px } ",
              }}
              onInit={() => handleEditorInit()}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </>
  );
}
