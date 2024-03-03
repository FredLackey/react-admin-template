import React from 'react'

const WidgetHudSection = () => {
  return (
    <>
      {/* <!-- Illustration dashboard card example--> */}
      <div className="card card-waves mb-4 mt-5">
          <div className="card-body p-5">
              <div className="row align-items-center justify-content-between">
                  <div className="col">
                      <h2 className="text-primary">Widgets are the heart of your application!</h2>
                      <p className="text-gray-700">This is an example HUD page... a type of inner dashboard  pertaining to a section of the application.  In this example,  we show details on how widgets are used.</p>
                      <a className="btn btn-primary p-3" href="#!">
                          Get Started
                          <i className="ms-1" data-feather="arrow-right"></i>
                      </a>
                  </div>
                  <div className="col d-none d-lg-block mt-xxl-n4"><img className="img-fluid px-xl-4 mt-xxl-n5" src="/assets/img/illustrations/statistics.svg" /></div>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
              {/* <!-- Dashboard info widget 1--> */}
              <div className="card border-start-lg border-start-primary h-100">
                  <div className="card-body">
                      <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                              <div className="small fw-bold text-primary mb-1">Earnings (monthly)</div>
                              <div className="h5">$4,390</div>
                              <div className="text-xs fw-bold text-success d-inline-flex align-items-center">
                                  <i className="me-1" data-feather="trending-up"></i>
                                  12%
                              </div>
                          </div>
                          <div className="ms-2"><i className="fas fa-dollar-sign fa-2x text-gray-200"></i></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
              {/* <!-- Dashboard info widget 2--> */}
              <div className="card border-start-lg border-start-secondary h-100">
                  <div className="card-body">
                      <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                              <div className="small fw-bold text-secondary mb-1">Average sale price</div>
                              <div className="h5">$27.00</div>
                              <div className="text-xs fw-bold text-danger d-inline-flex align-items-center">
                                  <i className="me-1" data-feather="trending-down"></i>
                                  3%
                              </div>
                          </div>
                          <div className="ms-2"><i className="fas fa-tag fa-2x text-gray-200"></i></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
              {/* <!-- Dashboard info widget 3--> */}
              <div className="card border-start-lg border-start-success h-100">
                  <div className="card-body">
                      <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                              <div className="small fw-bold text-success mb-1">Clicks</div>
                              <div className="h5">11,291</div>
                              <div className="text-xs fw-bold text-success d-inline-flex align-items-center">
                                  <i className="me-1" data-feather="trending-up"></i>
                                  12%
                              </div>
                          </div>
                          <div className="ms-2"><i className="fas fa-mouse-pointer fa-2x text-gray-200"></i></div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
              {/* <!-- Dashboard info widget 4--> */}
              <div className="card border-start-lg border-start-info h-100">
                  <div className="card-body">
                      <div className="d-flex align-items-center">
                          <div className="flex-grow-1">
                              <div className="small fw-bold text-info mb-1">Conversion rate</div>
                              <div className="h5">1.23%</div>
                              <div className="text-xs fw-bold text-danger d-inline-flex align-items-center">
                                  <i className="me-1" data-feather="trending-down"></i>
                                  1%
                              </div>
                          </div>
                          <div className="ms-2"><i className="fas fa-percentage fa-2x text-gray-200"></i></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-lg-4 mb-4">
              {/* <!-- Illustration card example--> */}
              <div className="card mb-4">
                  <div className="card-body text-center p-5">
                      <img className="img-fluid mb-5" src="/assets/img/illustrations/data-report.svg" />
                      <h4>Report generation</h4>
                      <p className="mb-4">Ready to get started? Let us know now! It's time to start building that dashboard you've been waiting to create!</p>
                      <a className="btn btn-primary p-3" href="#!">Continue</a>
                  </div>
              </div>
              {/* <!-- Report summary card example--> */}
              <div className="card mb-4">
                  <div className="card-header">Affiliate Reports</div>
                  <div className="list-group list-group-flush small">
                      <a className="list-group-item list-group-item-action" href="#!">
                          <i className="fas fa-dollar-sign fa-fw text-blue me-2"></i>
                          Earnings Reports
                      </a>
                      <a className="list-group-item list-group-item-action" href="#!">
                          <i className="fas fa-tag fa-fw text-purple me-2"></i>
                          Average Sale Price
                      </a>
                      <a className="list-group-item list-group-item-action" href="#!">
                          <i className="fas fa-mouse-pointer fa-fw text-green me-2"></i>
                          Engagement (Clicks &amp; Impressions)
                      </a>
                      <a className="list-group-item list-group-item-action" href="#!">
                          <i className="fas fa-percentage fa-fw text-yellow me-2"></i>
                          Conversion Rate
                      </a>
                      <a className="list-group-item list-group-item-action" href="#!">
                          <i className="fas fa-chart-pie fa-fw text-pink me-2"></i>
                          Segments
                      </a>
                  </div>
                  <div className="card-footer position-relative border-top-0">
                      <a className="stretched-link" href="#!">
                          <div className="text-xs d-flex align-items-center justify-content-between">
                              View More Reports
                              <i className="fas fa-long-arrow-alt-right"></i>
                          </div>
                      </a>
                  </div>
              </div>
              {/* <!-- Progress card example--> */}
              <div className="card bg-primary border-0">
                  <div className="card-body">
                      <h5 className="text-white-50">Budget Overview</h5>
                      <div className="mb-4">
                          <span className="display-4 text-white">$48k</span>
                          <span className="text-white-50">per year</span>
                      </div>
                      <div className="progress bg-white-25 rounded-pill" style="height: 0.5rem"><div className="progress-bar bg-white w-75 rounded-pill" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>
                  </div>
              </div>
          </div>
          <div className="col-lg-8 mb-4">
              {/* <!-- Area chart example--> */}
              <div className="card mb-4">
                  <div className="card-header">Revenue Summary</div>
                  <div className="card-body">
                      <div className="chart-area"><canvas id="myAreaChart" width="100%" height="30"></canvas></div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-lg-6">
                      {/* <!-- Bar chart example--> */}
                      <div className="card h-100">
                          <div className="card-header">Sales Reporting</div>
                          <div className="card-body d-flex flex-column justify-content-center">
                              <div className="chart-bar"><canvas id="myBarChart" width="100%" height="30"></canvas></div>
                          </div>
                          <div className="card-footer position-relative">
                              <a className="stretched-link" href="#!">
                                  <div className="text-xs d-flex align-items-center justify-content-between">
                                      View More Reports
                                      <i className="fas fa-long-arrow-alt-right"></i>
                                  </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      {/* <!-- Pie chart example--> */}
                      <div className="card h-100">
                          <div className="card-header">Traffic Sources</div>
                          <div className="card-body">
                              <div className="chart-pie mb-4"><canvas id="myPieChart" width="100%" height="50"></canvas></div>
                              <div className="list-group list-group-flush">
                                  <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                      <div className="me-3">
                                          <i className="fas fa-circle fa-sm me-1 text-blue"></i>
                                          Direct
                                      </div>
                                      <div className="fw-500 text-dark">55%</div>
                                  </div>
                                  <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                      <div className="me-3">
                                          <i className="fas fa-circle fa-sm me-1 text-purple"></i>
                                          Social
                                      </div>
                                      <div className="fw-500 text-dark">15%</div>
                                  </div>
                                  <div className="list-group-item d-flex align-items-center justify-content-between small px-0 py-2">
                                      <div className="me-3">
                                          <i className="fas fa-circle fa-sm me-1 text-green"></i>
                                          Referral
                                      </div>
                                      <div className="fw-500 text-dark">30%</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>    
    </>
  )
}

export default WidgetHudSection