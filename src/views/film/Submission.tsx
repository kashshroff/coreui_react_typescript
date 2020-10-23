import { CBadge, CButton, CCard, CCardBody, CCol, CDataTable, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CInput, CInputCheckbox, CLink, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { fields, userData, mobile_fields } from './tableData'
import moment from 'moment'
import BadgeCategory from '../../components/common/BadgeCategory'
import BadgeGenre from '../../components/common/BadgeGenre'

const Submission = () => {

  const [width, setWidth] = useState(window.innerWidth)

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  })

  return (
    <>
      <div className="title">Film Submission</div>
      <CRow className="submission mt_24">
        <CCol sm="6" md="6" lg="6" className="pr_0">
          <CDropdown className="small_caret">
            <CDropdownToggle caret color="light">
              Last 30 days
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>Last 15 days</CDropdownItem>
              <CDropdownItem>Yesterday</CDropdownItem>
              <CDropdownItem>Today</CDropdownItem>
              <CDropdownItem divider />
              <CDropdownItem>Tomorrow</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CButton color="primary" style={{ marginLeft: "10px", width: "135px" }}>Modify Filter</CButton>
        </CCol>
        {width > 500 &&
          <CCol sm="6" md="6" lg="6" className="pl_0">
            <div className="pull_right">
              <span>Sort by: </span>
              <CDropdown style={{ marginLeft: "10px" }}>
                <CDropdownToggle caret color="light">
                  Latest Submission
            </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Last 15 days</CDropdownItem>
                  <CDropdownItem>Yesterday</CDropdownItem>
                  <CDropdownItem>Today</CDropdownItem>
                  <CDropdownItem divider />
                  <CDropdownItem>Tomorrow</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </div>
          </CCol>
        }
      </CRow>

      <CCard className="mt_24">
        <CCardBody>
          <CDataTable
            items={userData}
            fields={width < 500 ? mobile_fields : fields}
            itemsPerPage={8}
            pagination
            sorter
            columnHeaderSlot={{ "id": "Select" }}
            scopedSlots={{
              'id': (item) => (
                <td className="table_checkbox">
                  <div>
                    <CInputCheckbox />
                  </div>
                </td>
              ),
              'filmname': (item) => (
                <td className="filmname_col">
                  <CLink to="/about-film" className="cursor_pointer">
                    {item.filmname}
                  </CLink>
                </td>
              ),
              'filmmaker': (item) => (
                <td className="filmmaker_col">
                  {item.filmmaker}
                </td>
              ),
              'category': (item) => (
                <td className="category">
                  <BadgeCategory status={item.category} />
                </td>
              ),
              'genre': (item) => (
                <td className="genre">
                  <BadgeGenre status={item.genre} />
                </td>
              ),
              'length': (item) => (
                <td className="length">
                  {item.length}
                </td>
              ),
              'time': (item) => (
                <td className="time">
                  {moment(item.time).format('DD MMM, HH:MM:SS')}
                </td>
              )
            }}
          />
        </CCardBody>
      </CCard>

    </>
  )
}

export default Submission
