import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateLayout = ({}) => {
  return (
    <div className="nav-fixed">
        <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white" id="sidenavAccordion">
            {/* <!-- Sidenav Toggle Button--> */}
            <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle"><i data-feather="menu"></i></button>
            {/* <!-- Navbar Brand--> */}
            {/* <!-- * * Tip * * You can use text or an image for your navbar brand.--> */}
            {/* <!-- * * * * * * When using an image, we recommend the SVG format.--> */}
            {/* <!-- * * * * * * Dimensions: Maximum height: 32px, maximum width: 240px--> */}
            <a className="navbar-brand pe-3 ps-4 ps-lg-2" href="index.html">{import.meta.env.VITE_UI_LOGO_TEXT}</a>
            {/* <!-- Navbar Search Input--> */}
            {/* <!-- * * Note: * * Visible only on and above the lg breakpoint--> */}
            <form className="form-inline me-auto d-none d-lg-block me-3">
                <div className="input-group input-group-joined input-group-solid">
                    <input className="form-control pe-0" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-text"><i data-feather="search"></i></div>
                </div>
            </form>
            {/* <!-- Navbar Items--> */}
            <ul className="navbar-nav align-items-center ms-auto">
                {/* <!-- Documentation Dropdown--> */}
                <li className="nav-item dropdown no-caret d-none d-md-block me-3">
                    <a className="nav-link dropdown-toggle" id="navbarDropdownDocs" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="fw-500">Documentation</div>
                        <i className="fas fa-chevron-right dropdown-arrow"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end py-0 me-sm-n15 me-lg-0 o-hidden animated--fade-in-up" aria-labelledby="navbarDropdownDocs">
                        <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro" target="_blank">
                            <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="book"></i></div>
                            <div>
                                <div className="small text-gray-500">Documentation</div>
                                Usage instructions and reference
                            </div>
                        </a>
                        <div className="dropdown-divider m-0"></div>
                        <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/components" target="_blank">
                            <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="code"></i></div>
                            <div>
                                <div className="small text-gray-500">Components</div>
                                Code snippets and reference
                            </div>
                        </a>
                        <div className="dropdown-divider m-0"></div>
                        <a className="dropdown-item py-3" href="https://docs.startbootstrap.com/sb-admin-pro/changelog" target="_blank">
                            <div className="icon-stack bg-primary-soft text-primary me-4"><i data-feather="file-text"></i></div>
                            <div>
                                <div className="small text-gray-500">Changelog</div>
                                Updates and changes
                            </div>
                        </a>
                    </div>
                </li>
                {/* <!-- Navbar Search Dropdown--> */}
                {/* <!-- * * Note: * * Visible only below the lg breakpoint--> */}
                <li className="nav-item dropdown no-caret me-3 d-lg-none">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="searchDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="search"></i></a>
                    {/* <!-- Dropdown - Search--> */}
                    <div className="dropdown-menu dropdown-menu-end p-3 shadow animated--fade-in-up" aria-labelledby="searchDropdown">
                        <form className="form-inline me-auto w-100">
                            <div className="input-group input-group-joined input-group-solid">
                                <input className="form-control pe-0" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-text"><i data-feather="search"></i></div>
                            </div>
                        </form>
                    </div>
                </li>
                {/* <!-- Alerts Dropdown--> */}
                <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownAlerts" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="bell"></i></a>
                    <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownAlerts">
                        <h6 className="dropdown-header dropdown-notifications-header">
                            <i className="me-2" data-feather="bell"></i>
                            Alerts Center
                        </h6>
                        {/* <!-- Example Alert 1--> */}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <div className="dropdown-notifications-item-icon bg-warning"><i data-feather="activity"></i></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 29, 2021</div>
                                <div className="dropdown-notifications-item-content-text">This is an alert message. It's nothing serious, but it requires your attention.</div>
                            </div>
                        </a>
                        {/* <!-- Example Alert 2--> */}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <div className="dropdown-notifications-item-icon bg-info"><i data-feather="bar-chart"></i></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 22, 2021</div>
                                <div className="dropdown-notifications-item-content-text">A new monthly report is ready. Click here to view!</div>
                            </div>
                        </a>
                        {/* <!-- Example Alert 3--> */}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <div className="dropdown-notifications-item-icon bg-danger"><i className="fas fa-exclamation-triangle"></i></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 8, 2021</div>
                                <div className="dropdown-notifications-item-content-text">Critical system failure, systems shutting down.</div>
                            </div>
                        </a>
                        {/* <!-- Example Alert 4--> */}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <div className="dropdown-notifications-item-icon bg-success"><i data-feather="user-plus"></i></div>
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-details">December 2, 2021</div>
                                <div className="dropdown-notifications-item-content-text">New user request. Woody has requested access to the organization.</div>
                            </div>
                        </a>
                        <a className="dropdown-item dropdown-notifications-footer" href="#!">View All Alerts</a>
                    </div>
                </li>
                {/* <!-- Messages Dropdown--> */}
                <li className="nav-item dropdown no-caret d-none d-sm-block me-3 dropdown-notifications">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownMessages" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i data-feather="mail"></i></a>
                    <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownMessages">
                        <h6 className="dropdown-header dropdown-notifications-header">
                            <i className="me-2" data-feather="mail"></i>
                            Message Center
                        </h6>
                        {/* <!-- Example Message 1  --> */}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <img className="dropdown-notifications-item-img" src="/assets/img/illustrations/profiles/profile-2.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Thomas Wilcox · 58m</div>
                            </div>
                        </a>
                        {/* <!-- Example Message 2--> */}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <img className="dropdown-notifications-item-img" src="/assets/img/illustrations/profiles/profile-3.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Emily Fowler · 2d</div>
                            </div>
                        </a>
                        {/* <!-- Example Message 3--> */}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <img className="dropdown-notifications-item-img" src="/assets/img/illustrations/profiles/profile-4.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Marshall Rosencrantz · 3d</div>
                            </div>
                        </a>
                        {/* <!-- Example Message 4--> */}
                        <a className="dropdown-item dropdown-notifications-item" href="#!">
                            <img className="dropdown-notifications-item-img" src="/assets/img/illustrations/profiles/profile-5.png" />
                            <div className="dropdown-notifications-item-content">
                                <div className="dropdown-notifications-item-content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                                <div className="dropdown-notifications-item-content-details">Colby Newton · 3d</div>
                            </div>
                        </a>
                        {/* <!-- Footer Link--> */}
                        <a className="dropdown-item dropdown-notifications-footer" href="#!">Read All Messages</a>
                    </div>
                </li>
                {/* <!-- User Dropdown--> */}
                <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
                    <a className="btn btn-icon btn-transparent-dark dropdown-toggle" id="navbarDropdownUserImage" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src="/assets/img/illustrations/profiles/profile-1.png" /></a>
                    <div className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up" aria-labelledby="navbarDropdownUserImage">
                        <h6 className="dropdown-header d-flex align-items-center">
                            <img className="dropdown-user-img" src="/assets/img/illustrations/profiles/profile-1.png" />
                            <div className="dropdown-user-details">
                                <div className="dropdown-user-details-name">Valerie Luna</div>
                                <div className="dropdown-user-details-email">vluna@aol.com</div>
                            </div>
                        </h6>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#!">
                            <div className="dropdown-item-icon"><i data-feather="settings"></i></div>
                            Account
                        </a>
                        <a className="dropdown-item" href="#!">
                            <div className="dropdown-item-icon"><i data-feather="log-out"></i></div>
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sidenav shadow-right sidenav-light">
                    <div className="sidenav-menu">
                        <div className="nav accordion" id="accordionSidenav">
                            {/* <!-- Sidenav Menu Heading (Account)--> */}
                            {/* <!-- * * Note: * * Visible only on and above the sm breakpoint--> */}
                            <div className="sidenav-menu-heading d-sm-none">Account</div>
                            {/* <!-- Sidenav Link (Alerts)--> */}
                            {/* <!-- * * Note: * * Visible only on and above the sm breakpoint--> */}
                            <a className="nav-link d-sm-none" href="#!">
                                <div className="nav-link-icon"><i data-feather="bell"></i></div>
                                Alerts
                                <span className="badge bg-warning-soft text-warning ms-auto">4 New!</span>
                            </a>
                            {/* <!-- Sidenav Link (Messages)--> */}
                            {/* <!-- * * Note: * * Visible only on and above the sm breakpoint--> */}
                            <a className="nav-link d-sm-none" href="#!">
                                <div className="nav-link-icon"><i data-feather="mail"></i></div>
                                Messages
                                <span className="badge bg-success-soft text-success ms-auto">2 New!</span>
                            </a>
                            {/* <!-- Sidenav Menu Heading (Core)--> */}
                            <div className="sidenav-menu-heading">Core</div>
                            {/* <!-- Sidenav Accordion (Dashboard)--> */}
                            <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                                <div className="nav-link-icon"><i data-feather="activity"></i></div>
                                Main Content
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseDashboards" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                    <a className="nav-link" href="dashboard-1.html">
                                        Default
                                        <span className="badge bg-primary-soft text-primary ms-auto">Updated</span>
                                    </a>
                                    <a className="nav-link" href="dashboard-2.html">Multipurpose</a>
                                    <a className="nav-link" href="dashboard-3.html">Affiliate</a>
                                </nav>
                            </div>
                            {/* <!-- Sidenav Heading (Custom)--> */}
                            <div className="sidenav-menu-heading">Custom</div>
                            {/* <!-- Sidenav Accordion (Pages)--> */}
                            <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="nav-link-icon"><i data-feather="grid"></i></div>
                                Pages
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
                                    {/* <!-- Nested Sidenav Accordion (Pages -> Account)--> */}
                                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAccount" aria-expanded="false" aria-controls="pagesCollapseAccount">
                                        Account
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAccount" data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav className="sidenav-menu-nested nav">
                                            <a className="nav-link" href="account-profile.html">Profile</a>
                                            <a className="nav-link" href="account-billing.html">Billing</a>
                                            <a className="nav-link" href="account-security.html">Security</a>
                                            <a className="nav-link" href="account-notifications.html">Notifications</a>
                                        </nav>
                                    </div>
                                    {/* <!-- Nested Sidenav Accordion (Pages -> Authentication)--> */}
                                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">
                                            {/* <!-- Nested Sidenav Accordion (Pages -> Authentication -> Basic)--> */}
                                            <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthBasic" aria-expanded="false" aria-controls="pagesCollapseAuthBasic">
                                                Basic
                                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseAuthBasic" data-bs-parent="#accordionSidenavPagesAuth">
                                                <nav className="sidenav-menu-nested nav">
                                                    <a className="nav-link" href="auth-login-basic.html">Login</a>
                                                    <a className="nav-link" href="auth-register-basic.html">Register</a>
                                                    <a className="nav-link" href="auth-password-basic.html">Forgot Password</a>
                                                </nav>
                                            </div>
                                            {/* <!-- Nested Sidenav Accordion (Pages -> Authentication -> Social)--> */}
                                            <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthSocial" aria-expanded="false" aria-controls="pagesCollapseAuthSocial">
                                                Social
                                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseAuthSocial" data-bs-parent="#accordionSidenavPagesAuth">
                                                <nav className="sidenav-menu-nested nav">
                                                    <a className="nav-link" href="auth-login-social.html">Login</a>
                                                    <a className="nav-link" href="auth-register-social.html">Register</a>
                                                    <a className="nav-link" href="auth-password-social.html">Forgot Password</a>
                                                </nav>
                                            </div>
                                        </nav>
                                    </div>
                                    {/* <!-- Nested Sidenav Accordion (Pages -> Error)--> */}
                                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" data-bs-parent="#accordionSidenavPagesMenu">
                                        <nav className="sidenav-menu-nested nav">
                                            <a className="nav-link" href="error-400.html">400 Error</a>
                                            <a className="nav-link" href="error-401.html">401 Error</a>
                                            <a className="nav-link" href="error-403.html">403 Error</a>
                                            <a className="nav-link" href="error-404-1.html">404 Error 1</a>
                                            <a className="nav-link" href="error-404-2.html">404 Error 2</a>
                                            <a className="nav-link" href="error-500.html">500 Error</a>
                                            <a className="nav-link" href="error-503.html">503 Error</a>
                                            <a className="nav-link" href="error-504.html">504 Error</a>
                                        </nav>
                                    </div>
                                    <a className="nav-link" href="pricing.html">Pricing</a>
                                    <a className="nav-link" href="invoice.html">Invoice</a>
                                </nav>
                            </div>
                            {/* <!-- Sidenav Accordion (Applications)--> */}
                            <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseApps" aria-expanded="false" aria-controls="collapseApps">
                                <div className="nav-link-icon"><i data-feather="globe"></i></div>
                                Applications
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseApps" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavAppsMenu">
                                    {/* <!-- Nested Sidenav Accordion (Apps -> Knowledge Base)--> */}
                                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#appsCollapseKnowledgeBase" aria-expanded="false" aria-controls="appsCollapseKnowledgeBase">
                                        Knowledge Base
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="appsCollapseKnowledgeBase" data-bs-parent="#accordionSidenavAppsMenu">
                                        <nav className="sidenav-menu-nested nav">
                                            <a className="nav-link" href="knowledge-base-home-1.html">Home 1</a>
                                            <a className="nav-link" href="knowledge-base-home-2.html">Home 2</a>
                                            <a className="nav-link" href="knowledge-base-category.html">Category</a>
                                            <a className="nav-link" href="knowledge-base-article.html">Article</a>
                                        </nav>
                                    </div>
                                    {/* <!-- Nested Sidenav Accordion (Apps -> User Management)--> */}
                                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#appsCollapseUserManagement" aria-expanded="false" aria-controls="appsCollapseUserManagement">
                                        User Management
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="appsCollapseUserManagement" data-bs-parent="#accordionSidenavAppsMenu">
                                        <nav className="sidenav-menu-nested nav">
                                            <a className="nav-link" href="user-management-list.html">Users List</a>
                                            <a className="nav-link" href="user-management-edit-user.html">Edit User</a>
                                            <a className="nav-link" href="user-management-add-user.html">Add User</a>
                                            <a className="nav-link" href="user-management-groups-list.html">Groups List</a>
                                            <a className="nav-link" href="user-management-org-details.html">Organization Details</a>
                                        </nav>
                                    </div>
                                    {/* <!-- Nested Sidenav Accordion (Apps -> Posts Management)--> */}
                                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#appsCollapsePostsManagement" aria-expanded="false" aria-controls="appsCollapsePostsManagement">
                                        Posts Management
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="appsCollapsePostsManagement" data-bs-parent="#accordionSidenavAppsMenu">
                                        <nav className="sidenav-menu-nested nav">
                                            <a className="nav-link" href="blog-management-posts-list.html">Posts List</a>
                                            <a className="nav-link" href="blog-management-create-post.html">Create Post</a>
                                            <a className="nav-link" href="blog-management-edit-post.html">Edit Post</a>
                                            <a className="nav-link" href="blog-management-posts-admin.html">Posts Admin</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            {/* <!-- Sidenav Accordion (Flows)--> */}
                            <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseFlows" aria-expanded="false" aria-controls="collapseFlows">
                                <div className="nav-link-icon"><i data-feather="repeat"></i></div>
                                Flows
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseFlows" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav">
                                    <a className="nav-link" href="multi-tenant-select.html">Multi-Tenant Registration</a>
                                    <a className="nav-link" href="wizard.html">Wizard</a>
                                </nav>
                            </div>
                            {/* <!-- Sidenav Heading (UI Toolkit)--> */}
                            <div className="sidenav-menu-heading">UI Toolkit</div>
                            {/* <!-- Sidenav Accordion (Layout)--> */}
                            <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="nav-link-icon"><i data-feather="layout"></i></div>
                                Layout
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                    {/* <!-- Nested Sidenav Accordion (Layout -> Navigation)--> */}
                                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseLayoutSidenavVariations" aria-expanded="false" aria-controls="collapseLayoutSidenavVariations">
                                        Navigation
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapseLayoutSidenavVariations" data-bs-parent="#accordionSidenavLayout">
                                        <nav className="sidenav-menu-nested nav">
                                            <a className="nav-link" href="layout-static.html">Static Sidenav</a>
                                            <a className="nav-link" href="layout-dark.html">Dark Sidenav</a>
                                            <a className="nav-link" href="layout-rtl.html">RTL Layout</a>
                                        </nav>
                                    </div>
                                    {/* <!-- Nested Sidenav Accordion (Layout -> Container Options)--> */}
                                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseLayoutContainers" aria-expanded="false" aria-controls="collapseLayoutContainers">
                                        Container Options
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapseLayoutContainers" data-bs-parent="#accordionSidenavLayout">
                                        <nav className="sidenav-menu-nested nav">
                                            <a className="nav-link" href="layout-boxed.html">Boxed Layout</a>
                                            <a className="nav-link" href="layout-fluid.html">Fluid Layout</a>
                                        </nav>
                                    </div>
                                    {/* <!-- Nested Sidenav Accordion (Layout -> Page Headers)--> */}
                                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseLayoutsPageHeaders" aria-expanded="false" aria-controls="collapseLayoutsPageHeaders">
                                        Page Headers
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapseLayoutsPageHeaders" data-bs-parent="#accordionSidenavLayout">
                                        <nav className="sidenav-menu-nested nav">
                                            <a className="nav-link" href="header-simplified.html">Simplified</a>
                                            <a className="nav-link" href="header-compact.html">Compact</a>
                                            <a className="nav-link" href="header-overlap.html">Content Overlap</a>
                                            <a className="nav-link" href="header-breadcrumbs.html">Breadcrumbs</a>
                                            <a className="nav-link" href="header-light.html">Light</a>
                                        </nav>
                                    </div>
                                    {/* <!-- Nested Sidenav Accordion (Layout -> Starter Layouts)--> */}
                                    <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseLayoutsStarterTemplates" aria-expanded="false" aria-controls="collapseLayoutsStarterTemplates">
                                        Starter Layouts
                                        <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapseLayoutsStarterTemplates" data-bs-parent="#accordionSidenavLayout">
                                        <nav className="sidenav-menu-nested nav">
                                            <a className="nav-link" href="starter-default.html">Default</a>
                                            <a className="nav-link" href="starter-minimal.html">Minimal</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            {/* <!-- Sidenav Accordion (Components)--> */}
                            <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseComponents" aria-expanded="false" aria-controls="collapseComponents">
                                <div className="nav-link-icon"><i data-feather="package"></i></div>
                                Components
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseComponents" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav">
                                    <a className="nav-link" href="alerts.html">Alerts</a>
                                    <a className="nav-link" href="avatars.html">Avatars</a>
                                    <a className="nav-link" href="badges.html">Badges</a>
                                    <a className="nav-link" href="buttons.html">Buttons</a>
                                    <a className="nav-link" href="cards.html">
                                        Cards
                                        <span className="badge bg-primary-soft text-primary ms-auto">Updated</span>
                                    </a>
                                    <a className="nav-link" href="dropdowns.html">Dropdowns</a>
                                    <a className="nav-link" href="forms.html">
                                        Forms
                                        <span className="badge bg-primary-soft text-primary ms-auto">Updated</span>
                                    </a>
                                    <a className="nav-link" href="modals.html">Modals</a>
                                    <a className="nav-link" href="navigation.html">Navigation</a>
                                    <a className="nav-link" href="progress.html">Progress</a>
                                    <a className="nav-link" href="step.html">Step</a>
                                    <a className="nav-link" href="timeline.html">Timeline</a>
                                    <a className="nav-link" href="toasts.html">Toasts</a>
                                    <a className="nav-link" href="tooltips.html">Tooltips</a>
                                </nav>
                            </div>
                            {/* <!-- Sidenav Accordion (Utilities)--> */}
                            <a className="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseUtilities" aria-expanded="false" aria-controls="collapseUtilities">
                                <div className="nav-link-icon"><i data-feather="tool"></i></div>
                                Utilities
                                <div className="sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseUtilities" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav">
                                    <a className="nav-link" href="animations.html">Animations</a>
                                    <a className="nav-link" href="background.html">Background</a>
                                    <a className="nav-link" href="borders.html">Borders</a>
                                    <a className="nav-link" href="lift.html">Lift</a>
                                    <a className="nav-link" href="shadows.html">Shadows</a>
                                    <a className="nav-link" href="typography.html">Typography</a>
                                </nav>
                            </div>
                            {/* <!-- Sidenav Heading (Addons)--> */}
                            <div className="sidenav-menu-heading">Plugins</div>
                            {/* <!-- Sidenav Link (Charts)--> */}
                            <a className="nav-link" href="charts.html">
                                <div className="nav-link-icon"><i data-feather="bar-chart"></i></div>
                                Charts
                            </a>
                            {/* <!-- Sidenav Link (Tables)--> */}
                            <a className="nav-link" href="tables.html">
                                <div className="nav-link-icon"><i data-feather="filter"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    {/* <!-- Sidenav Footer--> */}
                    <div className="sidenav-footer">
                        <div className="sidenav-footer-content">
                            <div className="sidenav-footer-subtitle">Logged in as:</div>
                            <div className="sidenav-footer-title">Valerie Luna</div>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>

                  <Outlet />

                </main>
                <footer className="footer-admin mt-auto footer-light">
                    <div className="container-xl px-4">
                        <div className="row">
                            <div className="col-md-6 small">&copy; {import.meta.env.VITE_UI_COPYRIGHT}</div>
                            <div className="col-md-6 text-md-end small">
                                <a href="#!">Privacy Policy</a>
                                &middot;
                                <a href="#!">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    </div>
  )
}

export default PrivateLayout