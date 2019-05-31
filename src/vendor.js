import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen'
import { faTabletAlt } from '@fortawesome/free-solid-svg-icons/faTabletAlt'
import { faTags } from '@fortawesome/free-solid-svg-icons/faTags'
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'

library.add(faCheck, faChevronRight, faDoorOpen, faTabletAlt, faTags, faTimes)
dom.watch()
