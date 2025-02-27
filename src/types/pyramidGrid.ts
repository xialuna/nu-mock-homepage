export interface DisplayImg {
  name: string
  logo: string
}

export interface PyramidGridProps {
  data: DisplayImg[]
  rowStructure?: number[] // Default: [6, 5, 4, 1]
}
