import React from "react";

import { Selector } from './styles'

const Option = ({ language }) => <option key={language} value={language}>{language}</option>

function FilterLanguage ({data, onChange, searchLang}) {

  const languageRepos = data.map(rep => rep.language).filter((lang, i, array) => array.indexOf(lang) === i)

  return (
    <form>
      <label>
        <Selector value={searchLang} onChange={onChange}>
          <option key={'default'} value=''>Linguagem..</option>
          {languageRepos.map(ret => <Option key={ret} language={ret}/>)}
        </Selector>
      </label>
    </form>
  )
}

export default FilterLanguage