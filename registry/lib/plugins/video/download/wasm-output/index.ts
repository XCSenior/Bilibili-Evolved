import { Toast } from '@/core/toast'
import { PluginMetadata } from '@/plugins/plugin'
import { DownloadVideoOutput } from '../../../../components/video/download/types'
import { run } from './handler'

const title = 'WASM 混流输出'
const desc = '使用 WASM 在浏览器中下载并合并音视频'

export const plugin: PluginMetadata = {
  name: 'downloadVideo.outputs.wasm',
  displayName: `下载视频 - ${title}`,
  description: desc,
  author: {
    name: 'WakelessSloth56',
    link: 'https://github.com/WakelessSloth56',
  },
  setup: ({ addData }) => {
    addData('downloadVideo.outputs', (outputs: DownloadVideoOutput[]) => {
      outputs.push({
        name: 'wasm',
        displayName: 'WASM',
        description: `${desc}，运行过程中请勿关闭页面，初次使用或清除缓存后需要加载约 30 MB 的 WASM 文件`,
        runAction: async action => {
          const fragments = action.infos.flatMap(it => it.titledFragments)

          if (
            fragments.length > 2 ||
            (fragments.length === 2 &&
              !(fragments[0].extension === '.mp4' && fragments[1].extension === '.m4a'))
          ) {
            Toast.error('仅支持单个视频下载', title)
          } else {
            const toast = Toast.info('正在加载', title)
            try {
              if (fragments.length === 2) {
                await run(fragments[0].title, toast, fragments[0].url, fragments[1].url) // [dash]
              } else {
                await run(fragments[0].title, toast, fragments[0].url) // [flv | m4a]
              }
            } catch (error) {
              toast.close()
              Toast.error(String(error), title)
            }
          }
        },
      })
    })
  },
}
