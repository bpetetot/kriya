import React from 'react'
import PropTypes from 'prop-types'
import styles from './tabs.styles.scss'

const Tabs = ({ children }) => {
  return (
    <div>
      <div className={styles.tabHeader}>
        {children.map(item => item.props.title)}
      </div>
      <div className={styles.tabContent}>
        {children}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Tabs
