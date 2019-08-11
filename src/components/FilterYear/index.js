import React from "react";
import { parseISO, getYear } from "date-fns";
import { Selector } from './styles'

const Option = ({ year }) => <option key={year} value={year}>{year}</option>

function Filter ({data, onChange, searchYear}) {

  const yearRepos = data.map(rep => getYear(parseISO(rep.created_at))).filter((year, i, arr) => arr.indexOf(year) === i).sort()
  
  return (
    <form>
      <label>
        <Selector value={searchYear} onChange={onChange}>
          <option key={'default'} value=''>Ano..</option>
          {yearRepos.map(ret => <Option key={ret} year={ret}/>)}
        </Selector>
      </label>
    </form>
  )
}

export default Filter