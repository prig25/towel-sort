/*module.exports = function towelSort (matrix) {
  let newmatrix=[];
  let x=0;
  let lngth=0;
  if (!matrix || matrix.length == 0) {
    return [];
  } else {
    matrix.map(
      (mtrx)=>{
        switch(x) {
          case '0':
            for (let i=0; i<mtrx.length; i++) {
              newmatrix[lngth+i]=mtrx[i];              
            }
            x=1;
            lngth = lngth + mtrx.length;
            break;
          case '1':
            mtrx.reverse();
            for (let i=0; i<mtrx.length; i++) {
              newmatrix[lngth+i]=mtrx[i];              
            }
            x=0;
            lngth = lngth + mtrx.length;
            break;
        }   
      }
    )
  return newmatrix;
  }
}*/
/*module.exports = function towelSort (matrix) {
  let newmatrix=[];
  let x=0;
  let lngth=0;
  if (!matrix || matrix.length == 0) {
    return [];
  } else {
    matrix.map(
      (mtrx)=>{
        switch(x) {
          case '0':
            for (let i=0; i<mtrx.length; i++) {
              newmatrix.push(mtrx[i]);             
            }
            x=1;
            break;
          case '1':
            mtrx.reverse();
            for (let i=0; i<mtrx.length; i++) {
              newmatrix.push(mtrx[i]);             
            }
            x=0;
            break;
        }   
      }
    )
  return newmatrix;
  }
}*/
module.exports = function towelSort (matrix) {
  let newmatrix=[];
  let newmtrx=[];
  if (!matrix || matrix.length == 0) {
    return [];
  } else {    
      for (let i=0; i<matrix.length; i++) {
        !(i%2) ? newmatrix.push(matrix[i]) : newmatrix.push(matrix[i].reverse());
        }          
      newmatrix.map(
        (mtrx)=>{
          for (let i=0; i<mtrx.length; i++){
            newmtrx.push(mtrx[i]);
          }
        }
      );
    return newmtrx;
    }
}