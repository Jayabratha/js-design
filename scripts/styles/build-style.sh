set -e

echo "Building Styles"

sassfiles=(`find components -name "*.scss"`)

for sassfile in ${sassfiles[@]}; do
  # skip partials
  if [[ `basename ${sassfile}` =~ ^_ ]]; then
    continue
  fi
  cssts=`echo ${sassfile} | sed -e 's/.scss/-css.ts/'`
  lastdir=`basename $(dirname ${cssts})`
  # skip sass files outside of src folders
  if [[ ${lastdir} != "src" ]]; then
    continue
  fi
  echo "Generating ${cssts}"
  node ./scripts/styles/sass-render.js sass-template.tmpl ${sassfile} ${cssts}
done