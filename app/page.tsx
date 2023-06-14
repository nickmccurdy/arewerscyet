import './page.css'

export const metadata = {
  title: 'Support',
}

export default function Home() {
  return (
    <article id="50f95503-e826-4052-8e78-d4173ad7c3b8" className="page sans">
      <header>
        <h1 className="page-title">Support</h1>
        <p className="page-description"></p>
      </header>
      <div className="page-body">
        <table className="collection-content">
          <thead>
            <tr>
              <th>
                <span className="icon property-icon">
                  <svg
                    viewBox="0 0 16 16"
                    style={{
                      width: 14,
                      height: 14,
                      display: 'block',
                      fill: 'rgba(55, 53, 47, 0.45)',
                      flexShrink: 0,
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                    className="typesTitle"
                  >
                    <path d="M0.637695 13.1914C1.0957 13.1914 1.32812 13 1.47852 12.5215L2.24414 10.3887H6.14746L6.90625 12.5215C7.05664 13 7.2959 13.1914 7.74707 13.1914C8.22559 13.1914 8.5332 12.9043 8.5332 12.4531C8.5332 12.2891 8.50586 12.1523 8.44434 11.9678L5.41602 3.79199C5.2041 3.21777 4.82129 2.9375 4.19922 2.9375C3.60449 2.9375 3.21484 3.21777 3.0166 3.78516L-0.0322266 12.002C-0.09375 12.1797 -0.121094 12.3232 -0.121094 12.4668C-0.121094 12.918 0.166016 13.1914 0.637695 13.1914ZM2.63379 9.12402L4.17871 4.68066H4.21973L5.76465 9.12402H2.63379ZM12.2793 13.2324C13.3115 13.2324 14.2891 12.6787 14.7129 11.8037H14.7402V12.5762C14.7471 12.9863 15.0273 13.2393 15.4238 13.2393C15.834 13.2393 16.1143 12.9795 16.1143 12.5215V8.00977C16.1143 6.49902 14.9658 5.52148 13.1543 5.52148C11.7666 5.52148 10.6592 6.08887 10.2695 6.99121C10.1943 7.15527 10.1533 7.3125 10.1533 7.46289C10.1533 7.81152 10.4062 8.04395 10.7686 8.04395C11.0215 8.04395 11.2129 7.94824 11.3496 7.73633C11.7529 6.99121 12.2861 6.65625 13.1064 6.65625C14.0977 6.65625 14.6992 7.20996 14.6992 8.1123V8.67285L12.5664 8.7959C10.7686 8.8916 9.77734 9.69824 9.77734 11.0107C9.77734 12.3369 10.8096 13.2324 12.2793 13.2324ZM12.6621 12.1387C11.8008 12.1387 11.2129 11.667 11.2129 10.9561C11.2129 10.2725 11.7598 9.82129 12.7578 9.75977L14.6992 9.62988V10.3203C14.6992 11.3457 13.7969 12.1387 12.6621 12.1387Z"></path>
                  </svg>
                </span>
                Name
              </th>
              <th>
                <span className="icon property-icon">
                  <svg
                    viewBox="0 0 16 16"
                    style={{
                      width: 14,
                      height: 14,
                      display: 'block',
                      fill: 'rgba(55, 53, 47, 0.45)',
                      flexShrink: 0,
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                    className="typesSelect"
                  >
                    <path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.62402 10.6348C7.79492 10.915 8.20508 10.9287 8.37598 10.6348L10.666 6.73145C10.8574 6.41016 10.7002 6.04102 10.3652 6.04102H5.62793C5.29297 6.04102 5.14941 6.43066 5.32031 6.73145L7.62402 10.6348Z"></path>
                  </svg>
                </span>
                Category
              </th>
              <th>
                <span className="icon property-icon">
                  <svg
                    viewBox="0 0 16 16"
                    style={{
                      width: 14,
                      height: 14,
                      display: 'block',
                      fill: 'rgba(55, 53, 47, 0.45)',
                      flexShrink: 0,
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                    className="typesStatus"
                  >
                    <path d="M8.75488 1.02344C8.75488 0.613281 8.41309 0.264648 8.00293 0.264648C7.59277 0.264648 7.25098 0.613281 7.25098 1.02344V3.11523C7.25098 3.51855 7.59277 3.86719 8.00293 3.86719C8.41309 3.86719 8.75488 3.51855 8.75488 3.11523V1.02344ZM3.91504 5.0293C4.20215 5.31641 4.69434 5.32324 4.97461 5.03613C5.26855 4.74902 5.26855 4.25684 4.98145 3.96973L3.53906 2.52051C3.25195 2.2334 2.7666 2.21973 2.47949 2.50684C2.19238 2.79395 2.18555 3.28613 2.47266 3.57324L3.91504 5.0293ZM10.9629 4.01758C10.6826 4.30469 10.6826 4.79688 10.9697 5.08398C11.2568 5.37109 11.749 5.36426 12.0361 5.07715L13.4854 3.62793C13.7725 3.34082 13.7725 2.84863 13.4785 2.55469C13.1982 2.27441 12.7061 2.27441 12.4189 2.56152L10.9629 4.01758ZM15.0234 8.78906C15.4336 8.78906 15.7822 8.44727 15.7822 8.03711C15.7822 7.62695 15.4336 7.28516 15.0234 7.28516H12.9385C12.5283 7.28516 12.1797 7.62695 12.1797 8.03711C12.1797 8.44727 12.5283 8.78906 12.9385 8.78906H15.0234ZM0.975586 7.28516C0.56543 7.28516 0.223633 7.62695 0.223633 8.03711C0.223633 8.44727 0.56543 8.78906 0.975586 8.78906H3.07422C3.48438 8.78906 3.83301 8.44727 3.83301 8.03711C3.83301 7.62695 3.48438 7.28516 3.07422 7.28516H0.975586ZM12.0361 10.9902C11.749 10.71 11.2568 10.71 10.9629 10.9971C10.6826 11.2842 10.6826 11.7764 10.9697 12.0635L12.4258 13.5127C12.7129 13.7998 13.2051 13.793 13.4922 13.5059C13.7793 13.2256 13.7725 12.7266 13.4854 12.4395L12.0361 10.9902ZM2.52051 12.4395C2.22656 12.7266 2.22656 13.2188 2.50684 13.5059C2.79395 13.793 3.28613 13.7998 3.57324 13.5127L5.02246 12.0703C5.31641 11.7832 5.31641 11.291 5.03613 11.0039C4.74902 10.7168 4.25684 10.71 3.96973 10.9971L2.52051 12.4395ZM8.75488 12.9658C8.75488 12.5557 8.41309 12.207 8.00293 12.207C7.59277 12.207 7.25098 12.5557 7.25098 12.9658V15.0576C7.25098 15.4609 7.59277 15.8096 8.00293 15.8096C8.41309 15.8096 8.75488 15.4609 8.75488 15.0576V12.9658Z"></path>
                  </svg>
                </span>
                Status
              </th>
              <th>
                <span className="icon property-icon">
                  <svg
                    viewBox="0 0 16 16"
                    style={{
                      width: 14,
                      height: 14,
                      display: 'block',
                      fill: 'rgba(55, 53, 47, 0.45)',
                      flexShrink: 0,
                      WebkitBackfaceVisibility: 'hidden',
                    }}
                    className="typesUrl"
                  >
                    <path d="M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"></path>
                  </svg>
                </span>
                URL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr id="38b4bdc5-3c10-4dd0-8a12-e66cf8991e32">
              <td className="cell-title">
                <a href="https://www.notion.so/Astro-38b4bdc53c104dd08a12e66cf8991e32?pvs=21">
                  Astro
                </a>
              </td>
              <td className="cell-zrxc">
                <span className="selected-value select-value-color-green">
                  Meta Framework
                </span>
              </td>
              <td className="cell-vzcw">
                <span className="status-value">
                  <div className="status-dot"></div>
                  Unsupported
                </span>
              </td>
              <td className="cell-iICG"></td>
            </tr>
            <tr id="4e1a94d8-1d6b-4755-a198-0457ab1accfc">
              <td className="cell-title">
                <a href="https://www.notion.so/Preact-4e1a94d81d6b4755a1980457ab1accfc?pvs=21">
                  Preact
                </a>
              </td>
              <td className="cell-zrxc">
                <span className="selected-value select-value-color-blue">
                  Framework
                </span>
              </td>
              <td className="cell-vzcw">
                <span className="status-value">
                  <div className="status-dot"></div>
                  Unsupported
                </span>
              </td>
              <td className="cell-iICG">
                <a
                  href="https://github.com/preactjs/preact/discussions/2879#discussioncomment-234815"
                  className="url-value"
                >
                  https://github.com/preactjs/preact/discussions/2879#discussioncomment-234815
                </a>
              </td>
            </tr>
            <tr id="ab136abb-d04f-4ed8-89e0-e9b24433ff10">
              <td className="cell-title">
                <a href="https://www.notion.so/React-Testing-Library-ab136abbd04f4ed889e0e9b24433ff10?pvs=21">
                  React Testing Library
                </a>
              </td>
              <td className="cell-zrxc">
                <span className="selected-value select-value-color-gray">
                  Tool
                </span>
              </td>
              <td className="cell-vzcw">
                <span className="status-value select-value-color-gray">
                  <div className="status-dot status-dot-color-gray"></div>
                  Planned
                </span>
              </td>
              <td className="cell-iICG">
                <a
                  href="https://github.com/testing-library/react-testing-library/issues/1209#issuecomment-1569813305"
                  className="url-value"
                >
                  https://github.com/testing-library/react-testing-library/issues/1209#issuecomment-1569813305
                </a>
              </td>
            </tr>
            <tr id="0680dfa7-9ce6-4b54-9ece-046c23cb4fba">
              <td className="cell-title">
                <a href="https://www.notion.so/Remix-0680dfa79ce64b549ece046c23cb4fba?pvs=21">
                  Remix
                </a>
              </td>
              <td className="cell-zrxc">
                <span className="selected-value select-value-color-green">
                  Meta Framework
                </span>
              </td>
              <td className="cell-vzcw">
                <span className="status-value select-value-color-gray">
                  <div className="status-dot status-dot-color-gray"></div>
                  Planned
                </span>
              </td>
              <td className="cell-iICG">
                <a
                  href="https://remix.run/blog/react-server-components"
                  className="url-value"
                >
                  https://remix.run/blog/react-server-components
                </a>
              </td>
            </tr>
            <tr id="ba08c49c-298c-4840-b209-1b219d07cdb0">
              <td className="cell-title">
                <a href="https://www.notion.so/Redwood-ba08c49c298c4840b2091b219d07cdb0?pvs=21">
                  Redwood
                </a>
              </td>
              <td className="cell-zrxc">
                <span className="selected-value select-value-color-green">
                  Meta Framework
                </span>
              </td>
              <td className="cell-vzcw">
                <span className="status-value select-value-color-gray">
                  <div className="status-dot status-dot-color-gray"></div>
                  Planned
                </span>
              </td>
              <td className="cell-iICG">
                <a
                  href="https://redwoodjs.notion.site/Public-Roadmap-6ade052af6414aca897cfd0bf3ae0641"
                  className="url-value"
                >
                  https://redwoodjs.notion.site/Public-Roadmap-6ade052af6414aca897cfd0bf3ae0641
                </a>
              </td>
            </tr>
            <tr id="b47b7640-80c4-48b6-9295-e466f5763231">
              <td className="cell-title">
                <a href="https://www.notion.so/React-b47b764080c448b69295e466f5763231?pvs=21">
                  React
                </a>
              </td>
              <td className="cell-zrxc">
                <span className="selected-value select-value-color-blue">
                  Framework
                </span>
              </td>
              <td className="cell-vzcw">
                <span className="status-value select-value-color-yellow">
                  <div className="status-dot status-dot-color-yellow"></div>
                  Canary
                </span>
              </td>
              <td className="cell-iICG">
                <a
                  href="https://react.dev/blog/2023/05/03/react-canaries"
                  className="url-value"
                >
                  https://react.dev/blog/2023/05/03/react-canaries
                </a>
              </td>
            </tr>
            <tr id="372316f5-a1bf-4793-a5b0-c5126d8993af">
              <td className="cell-title">
                <a href="https://www.notion.so/TypeScript-372316f5a1bf4793a5b0c5126d8993af?pvs=21">
                  TypeScript
                </a>
              </td>
              <td className="cell-zrxc">
                <span className="selected-value select-value-color-gray">
                  Tool
                </span>
              </td>
              <td className="cell-vzcw">
                <span className="status-value select-value-color-green">
                  <div className="status-dot status-dot-color-green"></div>
                  Stable
                </span>
              </td>
              <td className="cell-iICG">
                <a
                  href="https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/#decoupled-type-checking-between-jsx-elements-and-jsx-tag-types"
                  className="url-value"
                >
                  https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/#decoupled-type-checking-between-jsx-elements-and-jsx-tag-types
                </a>
              </td>
            </tr>
            <tr id="f5b44ab6-3cb5-4fe9-8bc4-c7159ecb4d5b">
              <td className="cell-title">
                <a href="https://www.notion.so/Next-app-router-f5b44ab63cb54fe98bc4c7159ecb4d5b?pvs=21">
                  Next (app router)
                </a>
              </td>
              <td className="cell-zrxc">
                <span className="selected-value select-value-color-green">
                  Meta Framework
                </span>
              </td>
              <td className="cell-vzcw">
                <span className="status-value select-value-color-green">
                  <div className="status-dot status-dot-color-green"></div>
                  Stable
                </span>
              </td>
              <td className="cell-iICG">
                <a
                  href="https://nextjs.org/docs/app/building-your-application/routing"
                  className="url-value"
                >
                  https://nextjs.org/docs/app/building-your-application/routing
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}
