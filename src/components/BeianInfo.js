import Image from 'next/image';

/** ICP 备案号（需与实际备案域名一致） */
const ICP_BEIAN = '晋ICP备2023020746号-2';
/** 工业和信息化部 ICP/IP地址/域名信息备案管理系统 */
const ICP_BEIAN_URL = 'https://beian.miit.gov.cn/';
/** 公安联网备案号（需与实际备案域名一致） */
const POLICE_BEIAN = '晋公网安备14010602111139号';
/** 公安备案记录编号，用于直达查询页 */
const POLICE_BEIAN_CODE = '14010602111139';
/** 全国互联网安全管理服务平台 */
const POLICE_BEIAN_URL = `https://beian.mps.gov.cn/#/query/webSearch?code=${POLICE_BEIAN_CODE}`;

/**
 * 网站底部备案信息。
 * 合规要点：ICP 备案号链接工信部备案系统；公安备案使用官方 20×20 徽标，
 * 徽标在左、备案号在右，并链接全国互联网安全管理服务平台的对应查询页。
 */
export default function BeianInfo() {
    return (
        <div
            className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-3 text-xs leading-5 text-gray-500 dark:text-gray-400">
            <a
                href={ICP_BEIAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="工业和信息化部 ICP/IP地址/域名信息备案管理系统"
                className="inline-flex items-center rounded-sm transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:hover:text-blue-400 dark:focus-visible:ring-offset-gray-900"
            >
                {ICP_BEIAN}
                <span className="sr-only">（在新窗口打开）</span>
            </a>
            <span aria-hidden="true" className="hidden text-gray-300 dark:text-gray-600 sm:inline">·</span>
            <a
                href={POLICE_BEIAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="全国互联网安全管理服务平台"
                className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:hover:text-blue-400 dark:focus-visible:ring-offset-gray-900"
            >
                <Image
                    src="/beian.png"
                    alt="公安备案图标"
                    width={20}
                    height={20}
                    unoptimized
                    className="h-[20px] w-[20px] shrink-0"
                />
                <span>{POLICE_BEIAN}</span>
                <span className="sr-only">（在新窗口打开）</span>
            </a>
        </div>
    );
}
