import { ScreenId } from '../types/types';
import { ScreenData } from '../types/mapdata-types';

type UpdateCallback = (data: ScreenData.ScreenDataProps) => void
const webpackModule = module as any

const SCREEN_PATHS: Record<ScreenId, string> = {
  screen1: '../data/screenData/screen1',
  screen2: '../data/screenData/screen2',
  screen3: '../data/screenData/screen3',
  screen4: '../data/screenData/screen4',
  screen5: '../data/screenData/screen5',
  screen6: '../data/screenData/screen6',
}

export async function loadScreenData(
  screenId: ScreenId,
  onUpdate?: UpdateCallback
): Promise<ScreenData.ScreenDataProps> {
  const dataKey = `${screenId.toUpperCase()}_DATA`

  const importer = () => {
    switch (screenId) {
      case 'screen1': return import(/* webpackChunkName: "map-data-screen1" */ '../data/screenData/screen1')
      case 'screen2': return import(/* webpackChunkName: "map-data-screen2" */ '../data/screenData/screen2')
      case 'screen3': return import(/* webpackChunkName: "map-data-screen3" */ '../data/screenData/screen3')
      case 'screen4': return import(/* webpackChunkName: "map-data-screen4" */ '../data/screenData/screen4')
      case 'screen5': return import(/* webpackChunkName: "map-data-screen5" */ '../data/screenData/screen5')
      case 'screen6': return import(/* webpackChunkName: "map-data-screen6" */ '../data/screenData/screen6')
      default: throw new Error(`Unknown screen: ${screenId}`)
    }
  }

  const screenModule = await importer()

  if (process.env.NODE_ENV === 'development' && webpackModule.hot) {
    webpackModule.hot.accept(SCREEN_PATHS[screenId], () => {
      importer().then((freshModule) => {
        onUpdate?.((freshModule as any)[dataKey])
      })
    })
  }

  return (screenModule as any)[dataKey]
}