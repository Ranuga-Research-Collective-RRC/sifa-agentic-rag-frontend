import {
  AgnoIcon,
  UserIcon,
  AgentIcon,
  SheetIcon,
  ReasoningIcon,
  ReferencesIcon
} from './custom-icons'
import { IconTypeMap } from './types'
import {
  RefreshCw,
  Edit,
  Save,
  X,
  ArrowDown,
  SendIcon,
  Download,
  HammerIcon,
  Check,
  ChevronDown,
  ChevronUp,
  Trash
} from 'lucide-react'

import { PlusIcon } from '@radix-ui/react-icons'

export const ICONS: IconTypeMap = {
  agno: AgnoIcon,
  user: UserIcon,
  agent: AgentIcon,
  sheet: SheetIcon,
  reasoning: ReasoningIcon,
  references: ReferencesIcon,
  refresh: RefreshCw,
  edit: Edit,
  save: Save,
  x: X,
  'arrow-down': ArrowDown,
  send: SendIcon,
  download: Download,
  hammer: HammerIcon,
  check: Check,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'plus-icon': PlusIcon,
  trash: Trash
}
