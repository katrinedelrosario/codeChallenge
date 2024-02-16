import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import style from "./breadcrumn.module.scss"
import { MdOutlineChevronRight } from "react-icons/md";


export default function Breadcrumb() {
  const [breadCrumbs, setBreadCrumbs] = useState([])
  const location = useLocation()

  useEffect(() => {
    const pathname = location.pathname.replace("/", "") 
    const newBreadCrumbs = pathname.split("/")
    console.log(pathname);
    setBreadCrumbs(newBreadCrumbs)
  }, [location])
  
  console.log(breadCrumbs);
  return (
    <div
    className={style.breadcrumb}
    >
      {breadCrumbs.map((crumb, index) => (
        <Fragment
        key={`crumb-${index}`}
        >
          <div>
            {crumb}
          </div>
          {index !== breadCrumbs.length - 1 && <MdOutlineChevronRight />}
        </Fragment>
      ))}
    </div>
  )
}
