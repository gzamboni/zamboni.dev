import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-json'

const Code = ({ children, language = 'javascript' }) => {
  return (
    <>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              children,
              Prism.languages[language.toLowerCase()] ||
                Prism.languages.javascript
            ),
          }}
        />
      </pre>

      <style jsx>{`
        pre {
          tab-size: 2;
        }

        code {
          display: block;
          padding: 0.8rem;
          line-height: 1.5;
          color: #f8f8f2;
          background: #282a36;
          font-size: 0.75rem;
          border-radius: var(--radius);
          font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          text-shadow: 0 1px rgba(0, 0, 0, 0.3);
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          word-wrap: normal;
          line-height: 1.5;
          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;
          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
        }
      `}</style>
    </>
  )
}

export default Code
