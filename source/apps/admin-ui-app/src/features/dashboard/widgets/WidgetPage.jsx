import React from 'react'
import { Outlet } from 'react-router-dom'

const WidgetPage = () => {
  return (
    <main>
      {/* <!-- Main page content--> */}
      <div className="container-xl px-4 mt-5">
          {/* <!-- Custom page header alternative example--> */}
          <div className="d-flex justify-content-between align-items-sm-center flex-column flex-sm-row mb-4">
              <div className="me-4 mb-3 mb-sm-0">
                  <h1 className="mb-0">Widgets</h1>
                  <div className="small">
                      <span className="fw-500 text-primary">Friday</span>
                      &middot; September 20, 2021 &middot; 12:16 PM
                  </div>
              </div>
              {/* <!-- Date range picker example--> */}
              <div className="input-group input-group-joined border-0 shadow" style="width: 16.5rem">
                  <span className="input-group-text"><i data-feather="calendar"></i></span>
                  <input className="form-control ps-0 pointer" id="litepickerRangePlugin" placeholder="Select date range..." />
              </div>
          </div>

          <Outlet />

      </div>
    </main>
  )
}

export default WidgetPage