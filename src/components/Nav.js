import React from 'react'

const Nav = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 show">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">myTunes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Overview</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Music</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Video</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gift Cards</a>
        </li>
      </ul>
    </div>
</nav>
    </div>
  )
}

export default Nav