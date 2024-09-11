import { siteConfig } from '@/lib/config'
import Link from 'next/link'
/**
 * Logo
 * 实际值支持文字
 * @param {*} props
 * @returns
 */
const Logo = props => {
  const { siteInfo } = props
  return (
    <Link href='/' passHref legacyBehavior>
      <div className='flex flex-col justify-center items-center cursor-pointer space-y-3'>
        <div className='font-bold text-lg p-2 rounded dark:border-white dark:text-white menu-link transform duration-200'>
          {' '}
          <span className = 'text-2xl'>😼</span>
          {' '}
          {siteInfo?.title || siteConfig('TITLE')}
        </div>
      </div>
    </Link>
  )
}
export default Logo
