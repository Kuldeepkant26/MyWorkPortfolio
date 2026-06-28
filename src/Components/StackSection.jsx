import React from 'react'
import '../styles/StackSection.css'

/**
 * StackSection — wraps a page section to produce a "scroll stack" effect:
 * each section sticks to the top of the viewport while the following section
 * scrolls up and overlaps it like a stack of cards.
 *
 * Props:
 *   index    — stacking order (controls z-index so later sections sit on top)
 *   rounded  — adds a rounded top edge + shadow so the overlap reads as a card
 *   className — optional extra classes
 */
const StackSection = ({ index = 0, rounded = true, className = '', children }) => (
  <div
    className={`stack${rounded ? ' stack--rounded' : ''}${className ? ` ${className}` : ''}`}
    style={{ zIndex: index + 1 }}
  >
    {children}
  </div>
)

export default StackSection
