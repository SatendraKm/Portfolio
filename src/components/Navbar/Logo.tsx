const Logo = ({
  width = 40,
  height = 40,
  className,
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src="/favicon/favicon.svg"
      alt="Satendra Kumar logo"
      width={width}
      height={height}
      className={className}
    />
  )
}

export default Logo
