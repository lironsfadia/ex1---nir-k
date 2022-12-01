import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { AccordionSummary, Avatar, CardHeader } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { useState } from 'react'

import { GroupProps } from '../../../common/typings'

export default function Group({
  title,
  subtitle,
  openHandler,
  closeHandler,
}: GroupProps) {
  const [open, setOpen] = useState(false)
  const handleExpandClick = () => {
    setOpen(!open)
  }
  return (
    <AccordionSummary
      expandIcon={
        <ExpandMoreIcon
          style={{ cursor: 'pointer' }}
          onClick={handleExpandClick}
        />
      }
      aria-controls={`${title}-content`}
      id={`${title}-group`}
      onClick={!open ? openHandler : closeHandler}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: deepPurple[500] }}
            alt="Group"
            src={require('../../../assets/avatar/group.png')}
          />
        }
        title={title}
        subheader={subtitle}
      />
    </AccordionSummary>
  )
}
