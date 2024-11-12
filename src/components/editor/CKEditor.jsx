import { useState, useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  DecoupledEditor,
  AccessibilityHelp,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  BalloonToolbar,
  Bold,
  CKBox,
  CKBoxImageEdit,
  CloudServices,
  Code,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  HorizontalLine,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  RemoveFormat,
  SelectAll,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
  Undo,
} from "ckeditor5";
import {
  ExportPdf,
  ExportWord,
  ImportWord,
  MultiLevelList,
  Pagination,
} from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import "./CKEditor.css";

const LICENSE_KEY = import.meta.env.VITE_CKEDITOR_LICENSE_KEY;
const CKBOX_TOKEN_URL = import.meta.env.VITE_CKBOX_TOKEN_URL;

export default function DocEditor({ content }) {
  const editorContainerRef = useRef(null);
  const editorMenuBarRef = useRef(null);
  const editorToolbarRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const editorConfig = {
    toolbar: {
      items: [
        "undo",
        "redo",
        "|",
        "previousPage",
        "nextPage",
        "|",
        "heading",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "link",
        "insertImage",
        "insertTable",
        "|",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "multiLevelList",
        "todoList",
        "outdent",
        "indent",
      ],
      shouldNotGroupWhenFull: false,
    },
    plugins: [
      AccessibilityHelp,
      Alignment,
      Autoformat,
      AutoImage,
      AutoLink,
      Autosave,
      BalloonToolbar,
      Bold,
      CKBox,
      CKBoxImageEdit,
      CloudServices,
      Code,
      Essentials,
      ExportPdf,
      ExportWord,
      FindAndReplace,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      Heading,
      HorizontalLine,
      ImageBlock,
      ImageCaption,
      ImageInline,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      ImportWord,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      MultiLevelList,
      PageBreak,
      Pagination,
      Paragraph,
      PasteFromOffice,
      PictureEditing,
      RemoveFormat,
      SelectAll,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Subscript,
      Superscript,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TextTransformation,
      TodoList,
      Underline,
      Undo,
    ],
    balloonToolbar: [
      "bold",
      "italic",
      "|",
      "link",
      "insertImage",
      "|",
      "bulletedList",
      "numberedList",
    ],
    ckbox: {
      tokenUrl: CKBOX_TOKEN_URL,
    },
    exportPdf: {
      stylesheets: [
        /* This path should point to application stylesheets. */
        /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-pdf.html */
        "./App.css",
        /* Export PDF needs access to stylesheets that style the content. */
        "https://cdn.ckeditor.com/ckeditor5/43.3.0/ckeditor5.css",
        "https://cdn.ckeditor.com/ckeditor5-premium-features/43.3.0/ckeditor5-premium-features.css",
      ],
      fileName: "export-pdf-demo.pdf",
      converterOptions: {
        format: "A4",
        margin_top: "20mm",
        margin_bottom: "20mm",
        margin_right: "12mm",
        margin_left: "12mm",
        page_orientation: "portrait",
      },
    },
    exportWord: {
      stylesheets: [
        /* This path should point to application stylesheets. */
        /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-word.html */
        "./App.css",
        /* Export Word needs access to stylesheets that style the content. */
        "https://cdn.ckeditor.com/ckeditor5/43.3.0/ckeditor5.css",
        "https://cdn.ckeditor.com/ckeditor5-premium-features/43.3.0/ckeditor5-premium-features.css",
      ],
      fileName: "export-word-demo.docx",
      converterOptions: {
        document: {
          orientation: "portrait",
          size: "A4",
          margins: {
            top: "20mm",
            bottom: "20mm",
            right: "12mm",
            left: "12mm",
          },
        },
      },
    },
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
        "|",
        "ckboxImageEdit",
      ],
    },
    initialData: content,
    licenseKey: LICENSE_KEY,
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    menuBar: {
      isVisible: true,
    },
    pagination: {
      pageWidth: "21cm",
      pageHeight: "29.7cm",
      pageMargins: {
        top: "20mm",
        bottom: "20mm",
        right: "12mm",
        left: "12mm",
      },
    },
    placeholder: "Type or paste your content here!",
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },
  };

  configUpdateAlert(editorConfig);

  return (
    <div className="main-container">
      <div
        className="editor-container editor-container_document-editor editor-container_include-pagination"
        ref={editorContainerRef}
      >
        <div
          className="editor-container__menu-bar"
          ref={editorMenuBarRef}
        ></div>
        <div className="editor-container__toolbar" ref={editorToolbarRef}></div>
        <div className="editor-container__editor-wrapper">
          <div className="editor-container__editor">
            <div ref={editorRef}>
              {isLayoutReady && (
                <CKEditor
                  onReady={(editor) => {
                    editorToolbarRef.current.appendChild(
                      editor.ui.view.toolbar.element
                    );
                    editorMenuBarRef.current.appendChild(
                      editor.ui.view.menuBarView.element
                    );
                  }}
                  onAfterDestroy={() => {
                    Array.from(editorToolbarRef.current.children).forEach(
                      (child) => child.remove()
                    );
                    Array.from(editorMenuBarRef.current.children).forEach(
                      (child) => child.remove()
                    );
                  }}
                  editor={DecoupledEditor}
                  config={editorConfig}
                  data={content}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
  if (configUpdateAlert.configUpdateAlertShown) {
    return;
  }

  const isModifiedByUser = (currentValue, forbiddenValue) => {
    if (currentValue === forbiddenValue) {
      return false;
    }

    if (currentValue === undefined) {
      return false;
    }

    return true;
  };

  const valuesToUpdate = [];

  configUpdateAlert.configUpdateAlertShown = true;

  if (!isModifiedByUser(config.licenseKey, "<YOUR_LICENSE_KEY>")) {
    valuesToUpdate.push("LICENSE_KEY");
  }

  if (!isModifiedByUser(config.ckbox?.tokenUrl, "<YOUR_CKBOX_TOKEN_URL>")) {
    valuesToUpdate.push("CKBOX_TOKEN_URL");
  }

  if (valuesToUpdate.length) {
    window.alert(
      [
        "Please update the following values in your editor config",
        "in order to receive full access to the Premium Features:",
        "",
        ...valuesToUpdate.map((value) => ` - ${value}`),
      ].join("\n")
    );
  }
}
