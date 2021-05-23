/*! LINE Corp - line.naver.jp/license */function BigInteger(t,e,n){null!=t&&("number"==typeof t?this.fromNumber(t,e,n):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function nbi(){return new BigInteger(null)}function am1(t,e,n,r,i,o){for(;--o>=0;){var s=e*this[t++]+n[r]+i;i=Math.floor(s/67108864),n[r++]=67108863&s}return i}function am2(t,e,n,r,i,o){for(var s=32767&e,a=e>>15;--o>=0;){var u=32767&this[t],l=this[t++]>>15,c=a*u+l*s;u=s*u+((32767&c)<<15)+n[r]+(1073741823&i),i=(u>>>30)+(c>>>15)+a*l+(i>>>30),n[r++]=1073741823&u}return i}function am3(t,e,n,r,i,o){for(var s=16383&e,a=e>>14;--o>=0;){var u=16383&this[t],l=this[t++]>>14,c=a*u+l*s;u=s*u+((16383&c)<<14)+n[r]+i,i=(u>>28)+(c>>14)+a*l,n[r++]=268435455&u}return i}function int2char(t){return BI_RM.charAt(t)}function intAt(t,e){var n=BI_RC[t.charCodeAt(e)];return null==n?-1:n}function bnpCopyTo(t){for(var e=this.t-1;e>=0;--e)t[e]=this[e];t.t=this.t,t.s=this.s}function bnpFromInt(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+DV:this.t=0}function nbv(t){var e=nbi();return e.fromInt(t),e}function bnpFromString(t,e){var n;if(16==e)n=4;else if(8==e)n=3;else if(256==e)n=8;else if(2==e)n=1;else if(32==e)n=5;else{if(4!=e)return this.fromRadix(t,e),void 0;n=2}this.t=0,this.s=0;for(var r=t.length,i=!1,o=0;--r>=0;){var s=8==n?255&t[r]:intAt(t,r);0>s?"-"==t.charAt(r)&&(i=!0):(i=!1,0==o?this[this.t++]=s:o+n>this.DB?(this[this.t-1]|=(s&(1<<this.DB-o)-1)<<o,this[this.t++]=s>>this.DB-o):this[this.t-1]|=s<<o,o+=n,o>=this.DB&&(o-=this.DB))}8==n&&0!=(128&t[0])&&(this.s=-1,o>0&&(this[this.t-1]|=(1<<this.DB-o)-1<<o)),this.clamp(),i&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function bnToString(t){if(0>this.s)return"-"+this.negate().toString(t);var e;if(16==t)e=4;else if(8==t)e=3;else if(2==t)e=1;else if(32==t)e=5;else{if(4!=t)return this.toRadix(t);e=2}var n,r=(1<<e)-1,i=!1,o="",s=this.t,a=this.DB-s*this.DB%e;if(s-->0)for(this.DB>a&&(n=this[s]>>a)>0&&(i=!0,o=int2char(n));s>=0;)e>a?(n=(this[s]&(1<<a)-1)<<e-a,n|=this[--s]>>(a+=this.DB-e)):(n=this[s]>>(a-=e)&r,0>=a&&(a+=this.DB,--s)),n>0&&(i=!0),i&&(o+=int2char(n));return i?o:"0"}function bnNegate(){var t=nbi();return BigInteger.ZERO.subTo(this,t),t}function bnAbs(){return 0>this.s?this.negate():this}function bnCompareTo(t){var e=this.s-t.s;if(0!=e)return e;var n=this.t;if(e=n-t.t,0!=e)return e;for(;--n>=0;)if(0!=(e=this[n]-t[n]))return e;return 0}function nbits(t){var e,n=1;return 0!=(e=t>>>16)&&(t=e,n+=16),0!=(e=t>>8)&&(t=e,n+=8),0!=(e=t>>4)&&(t=e,n+=4),0!=(e=t>>2)&&(t=e,n+=2),0!=(e=t>>1)&&(t=e,n+=1),n}function bnBitLength(){return 0>=this.t?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(t,e){var n;for(n=this.t-1;n>=0;--n)e[n+t]=this[n];for(n=t-1;n>=0;--n)e[n]=0;e.t=this.t+t,e.s=this.s}function bnpDRShiftTo(t,e){for(var n=t;this.t>n;++n)e[n-t]=this[n];e.t=Math.max(this.t-t,0),e.s=this.s}function bnpLShiftTo(t,e){var n,r=t%this.DB,i=this.DB-r,o=(1<<i)-1,s=Math.floor(t/this.DB),a=this.s<<r&this.DM;for(n=this.t-1;n>=0;--n)e[n+s+1]=this[n]>>i|a,a=(this[n]&o)<<r;for(n=s-1;n>=0;--n)e[n]=0;e[s]=a,e.t=this.t+s+1,e.s=this.s,e.clamp()}function bnpRShiftTo(t,e){e.s=this.s;var n=Math.floor(t/this.DB);if(n>=this.t)return e.t=0,void 0;var r=t%this.DB,i=this.DB-r,o=(1<<r)-1;e[0]=this[n]>>r;for(var s=n+1;this.t>s;++s)e[s-n-1]|=(this[s]&o)<<i,e[s-n]=this[s]>>r;r>0&&(e[this.t-n-1]|=(this.s&o)<<i),e.t=this.t-n,e.clamp()}function bnpSubTo(t,e){for(var n=0,r=0,i=Math.min(t.t,this.t);i>n;)r+=this[n]-t[n],e[n++]=r&this.DM,r>>=this.DB;if(t.t<this.t){for(r-=t.s;this.t>n;)r+=this[n],e[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;t.t>n;)r-=t[n],e[n++]=r&this.DM,r>>=this.DB;r-=t.s}e.s=0>r?-1:0,-1>r?e[n++]=this.DV+r:r>0&&(e[n++]=r),e.t=n,e.clamp()}function bnpMultiplyTo(t,e){var n=this.abs(),r=t.abs(),i=n.t;for(e.t=i+r.t;--i>=0;)e[i]=0;for(i=0;r.t>i;++i)e[i+n.t]=n.am(0,r[i],e,i,0,n.t);e.s=0,e.clamp(),this.s!=t.s&&BigInteger.ZERO.subTo(e,e)}function bnpSquareTo(t){for(var e=this.abs(),n=t.t=2*e.t;--n>=0;)t[n]=0;for(n=0;e.t-1>n;++n){var r=e.am(n,e[n],t,2*n,0,1);(t[n+e.t]+=e.am(n+1,2*e[n],t,2*n+1,r,e.t-n-1))>=e.DV&&(t[n+e.t]-=e.DV,t[n+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(n,e[n],t,2*n,0,1)),t.s=0,t.clamp()}function bnpDivRemTo(t,e,n){var r=t.abs();if(!(0>=r.t)){var i=this.abs();if(i.t<r.t)return null!=e&&e.fromInt(0),null!=n&&this.copyTo(n),void 0;null==n&&(n=nbi());var o=nbi(),s=this.s,a=t.s,u=this.DB-nbits(r[r.t-1]);u>0?(r.lShiftTo(u,o),i.lShiftTo(u,n)):(r.copyTo(o),i.copyTo(n));var l=o.t,c=o[l-1];if(0!=c){var p=c*(1<<this.F1)+(l>1?o[l-2]>>this.F2:0),h=this.FV/p,f=(1<<this.F1)/p,d=1<<this.F2,g=n.t,m=g-l,y=null==e?nbi():e;for(o.dlShiftTo(m,y),n.compareTo(y)>=0&&(n[n.t++]=1,n.subTo(y,n)),BigInteger.ONE.dlShiftTo(l,y),y.subTo(o,o);l>o.t;)o[o.t++]=0;for(;--m>=0;){var v=n[--g]==c?this.DM:Math.floor(n[g]*h+(n[g-1]+d)*f);if(v>(n[g]+=o.am(0,v,n,m,0,l)))for(o.dlShiftTo(m,y),n.subTo(y,n);n[g]<--v;)n.subTo(y,n)}null!=e&&(n.drShiftTo(l,e),s!=a&&BigInteger.ZERO.subTo(e,e)),n.t=l,n.clamp(),u>0&&n.rShiftTo(u,n),0>s&&BigInteger.ZERO.subTo(n,n)}}}function bnMod(t){var e=nbi();return this.abs().divRemTo(t,null,e),0>this.s&&e.compareTo(BigInteger.ZERO)>0&&t.subTo(e,e),e}function Classic(t){this.m=t}function cConvert(t){return 0>t.s||t.compareTo(this.m)>=0?t.mod(this.m):t}function cRevert(t){return t}function cReduce(t){t.divRemTo(this.m,null,t)}function cMulTo(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function cSqrTo(t,e){t.squareTo(e),this.reduce(e)}function bnpInvDigit(){if(1>this.t)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return e=15&e*(2-(15&t)*e),e=255&e*(2-(255&t)*e),e=65535&e*(2-(65535&(65535&t)*e)),e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}function Montgomery(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function montConvert(t){var e=nbi();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),0>t.s&&e.compareTo(BigInteger.ZERO)>0&&this.m.subTo(e,e),e}function montRevert(t){var e=nbi();return t.copyTo(e),this.reduce(e),e}function montReduce(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var e=0;this.m.t>e;++e){var n=32767&t[e],r=n*this.mpl+((n*this.mph+(t[e]>>15)*this.mpl&this.um)<<15)&t.DM;for(n=e+this.m.t,t[n]+=this.m.am(0,r,t,e,0,this.m.t);t[n]>=t.DV;)t[n]-=t.DV,t[++n]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function montSqrTo(t,e){t.squareTo(e),this.reduce(e)}function montMulTo(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function bnpIsEven(){return 0==(this.t>0?1&this[0]:this.s)}function bnpExp(t,e){if(t>4294967295||1>t)return BigInteger.ONE;var n=nbi(),r=nbi(),i=e.convert(this),o=nbits(t)-1;for(i.copyTo(n);--o>=0;)if(e.sqrTo(n,r),(t&1<<o)>0)e.mulTo(r,i,n);else{var s=n;n=r,r=s}return e.revert(n)}function bnModPowInt(t,e){var n;return n=256>t||e.isEven()?new Classic(e):new Montgomery(e),this.exp(t,n)}function bnClone(){var t=nbi();return this.copyTo(t),t}function bnIntValue(){if(0>this.s){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return 0==this.t?this.s:this[0]<<24>>24}function bnShortValue(){return 0==this.t?this.s:this[0]<<16>>16}function bnpChunkSize(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function bnSigNum(){return 0>this.s?-1:0>=this.t||1==this.t&&0>=this[0]?0:1}function bnpToRadix(t){if(null==t&&(t=10),0==this.signum()||2>t||t>36)return"0";var e=this.chunkSize(t),n=Math.pow(t,e),r=nbv(n),i=nbi(),o=nbi(),s="";for(this.divRemTo(r,i,o);i.signum()>0;)s=(n+o.intValue()).toString(t).substr(1)+s,i.divRemTo(r,i,o);return o.intValue().toString(t)+s}function bnpFromRadix(t,e){this.fromInt(0),null==e&&(e=10);for(var n=this.chunkSize(e),r=Math.pow(e,n),i=!1,o=0,s=0,a=0;t.length>a;++a){var u=intAt(t,a);0>u?"-"==t.charAt(a)&&0==this.signum()&&(i=!0):(s=e*s+u,++o>=n&&(this.dMultiply(r),this.dAddOffset(s,0),o=0,s=0))}o>0&&(this.dMultiply(Math.pow(e,o)),this.dAddOffset(s,0)),i&&BigInteger.ZERO.subTo(this,this)}function bnpFromNumber(t,e,n){if("number"==typeof e)if(2>t)this.fromInt(1);else for(this.fromNumber(t,n),this.testBit(t-1)||this.bitwiseTo(BigInteger.ONE.shiftLeft(t-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(e);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(BigInteger.ONE.shiftLeft(t-1),this);else{var r=[],i=7&t;r.length=(t>>3)+1,e.nextBytes(r),i>0?r[0]&=(1<<i)-1:r[0]=0,this.fromString(r,256)}}function bnToByteArray(){var t=this.t,e=[];e[0]=this.s;var n,r=this.DB-t*this.DB%8,i=0;if(t-->0)for(this.DB>r&&(n=this[t]>>r)!=(this.s&this.DM)>>r&&(e[i++]=n|this.s<<this.DB-r);t>=0;)8>r?(n=(this[t]&(1<<r)-1)<<8-r,n|=this[--t]>>(r+=this.DB-8)):(n=255&this[t]>>(r-=8),0>=r&&(r+=this.DB,--t)),0!=(128&n)&&(n|=-256),0==i&&(128&this.s)!=(128&n)&&++i,(i>0||n!=this.s)&&(e[i++]=n);return e}function bnEquals(t){return 0==this.compareTo(t)}function bnMin(t){return 0>this.compareTo(t)?this:t}function bnMax(t){return this.compareTo(t)>0?this:t}function bnpBitwiseTo(t,e,n){var r,i,o=Math.min(t.t,this.t);for(r=0;o>r;++r)n[r]=e(this[r],t[r]);if(t.t<this.t){for(i=t.s&this.DM,r=o;this.t>r;++r)n[r]=e(this[r],i);n.t=this.t}else{for(i=this.s&this.DM,r=o;t.t>r;++r)n[r]=e(i,t[r]);n.t=t.t}n.s=e(this.s,t.s),n.clamp()}function op_and(t,e){return t&e}function bnAnd(t){var e=nbi();return this.bitwiseTo(t,op_and,e),e}function op_or(t,e){return t|e}function bnOr(t){var e=nbi();return this.bitwiseTo(t,op_or,e),e}function op_xor(t,e){return t^e}function bnXor(t){var e=nbi();return this.bitwiseTo(t,op_xor,e),e}function op_andnot(t,e){return t&~e}function bnAndNot(t){var e=nbi();return this.bitwiseTo(t,op_andnot,e),e}function bnNot(){for(var t=nbi(),e=0;this.t>e;++e)t[e]=this.DM&~this[e];return t.t=this.t,t.s=~this.s,t}function bnShiftLeft(t){var e=nbi();return 0>t?this.rShiftTo(-t,e):this.lShiftTo(t,e),e}function bnShiftRight(t){var e=nbi();return 0>t?this.lShiftTo(-t,e):this.rShiftTo(t,e),e}function lbit(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function bnGetLowestSetBit(){for(var t=0;this.t>t;++t)if(0!=this[t])return t*this.DB+lbit(this[t]);return 0>this.s?this.t*this.DB:-1}function cbit(t){for(var e=0;0!=t;)t&=t-1,++e;return e}function bnBitCount(){for(var t=0,e=this.s&this.DM,n=0;this.t>n;++n)t+=cbit(this[n]^e);return t}function bnTestBit(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)}function bnpChangeBit(t,e){var n=BigInteger.ONE.shiftLeft(t);return this.bitwiseTo(n,e,n),n}function bnSetBit(t){return this.changeBit(t,op_or)}function bnClearBit(t){return this.changeBit(t,op_andnot)}function bnFlipBit(t){return this.changeBit(t,op_xor)}function bnpAddTo(t,e){for(var n=0,r=0,i=Math.min(t.t,this.t);i>n;)r+=this[n]+t[n],e[n++]=r&this.DM,r>>=this.DB;if(t.t<this.t){for(r+=t.s;this.t>n;)r+=this[n],e[n++]=r&this.DM,r>>=this.DB;r+=this.s}else{for(r+=this.s;t.t>n;)r+=t[n],e[n++]=r&this.DM,r>>=this.DB;r+=t.s}e.s=0>r?-1:0,r>0?e[n++]=r:-1>r&&(e[n++]=this.DV+r),e.t=n,e.clamp()}function bnAdd(t){var e=nbi();return this.addTo(t,e),e}function bnSubtract(t){var e=nbi();return this.subTo(t,e),e}function bnMultiply(t){var e=nbi();return this.multiplyTo(t,e),e}function bnDivide(t){var e=nbi();return this.divRemTo(t,e,null),e}function bnRemainder(t){var e=nbi();return this.divRemTo(t,null,e),e}function bnDivideAndRemainder(t){var e=nbi(),n=nbi();return this.divRemTo(t,e,n),[e,n]}function bnpDMultiply(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()}function bnpDAddOffset(t,e){for(;e>=this.t;)this[this.t++]=0;for(this[e]+=t;this[e]>=this.DV;)this[e]-=this.DV,++e>=this.t&&(this[this.t++]=0),++this[e]}function NullExp(){}function nNop(t){return t}function nMulTo(t,e,n){t.multiplyTo(e,n)}function nSqrTo(t,e){t.squareTo(e)}function bnPow(t){return this.exp(t,new NullExp)}function bnpMultiplyLowerTo(t,e,n){var r=Math.min(this.t+t.t,e);for(n.s=0,n.t=r;r>0;)n[--r]=0;var i;for(i=n.t-this.t;i>r;++r)n[r+this.t]=this.am(0,t[r],n,r,0,this.t);for(i=Math.min(t.t,e);i>r;++r)this.am(0,t[r],n,r,0,e-r);n.clamp()}function bnpMultiplyUpperTo(t,e,n){--e;var r=n.t=this.t+t.t-e;for(n.s=0;--r>=0;)n[r]=0;for(r=Math.max(e-this.t,0);t.t>r;++r)n[this.t+r-e]=this.am(e-r,t[r],n,0,0,this.t+r-e);n.clamp(),n.drShiftTo(1,n)}function Barrett(t){this.r2=nbi(),this.q3=nbi(),BigInteger.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}function barrettConvert(t){if(0>t.s||t.t>2*this.m.t)return t.mod(this.m);if(0>t.compareTo(this.m))return t;var e=nbi();return t.copyTo(e),this.reduce(e),e}function barrettRevert(t){return t}function barrettReduce(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);0>t.compareTo(this.r2);)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)}function barrettSqrTo(t,e){t.squareTo(e),this.reduce(e)}function barrettMulTo(t,e,n){t.multiplyTo(e,n),this.reduce(n)}function bnModPow(t,e){var n,r,i=t.bitLength(),o=nbv(1);if(0>=i)return o;n=18>i?1:48>i?3:144>i?4:768>i?5:6,r=8>i?new Classic(e):e.isEven()?new Barrett(e):new Montgomery(e);var s=[],a=3,u=n-1,l=(1<<n)-1;if(s[1]=r.convert(this),n>1){var c=nbi();for(r.sqrTo(s[1],c);l>=a;)s[a]=nbi(),r.mulTo(c,s[a-2],s[a]),a+=2}var p,h,f=t.t-1,d=!0,g=nbi();for(i=nbits(t[f])-1;f>=0;){for(i>=u?p=t[f]>>i-u&l:(p=(t[f]&(1<<i+1)-1)<<u-i,f>0&&(p|=t[f-1]>>this.DB+i-u)),a=n;0==(1&p);)p>>=1,--a;if(0>(i-=a)&&(i+=this.DB,--f),d)s[p].copyTo(o),d=!1;else{for(;a>1;)r.sqrTo(o,g),r.sqrTo(g,o),a-=2;a>0?r.sqrTo(o,g):(h=o,o=g,g=h),r.mulTo(g,s[p],o)}for(;f>=0&&0==(t[f]&1<<i);)r.sqrTo(o,g),h=o,o=g,g=h,0>--i&&(i=this.DB-1,--f)}return r.revert(o)}function bnGCD(t){var e=0>this.s?this.negate():this.clone(),n=0>t.s?t.negate():t.clone();if(0>e.compareTo(n)){var r=e;e=n,n=r}var i=e.getLowestSetBit(),o=n.getLowestSetBit();if(0>o)return e;for(o>i&&(o=i),o>0&&(e.rShiftTo(o,e),n.rShiftTo(o,n));e.signum()>0;)(i=e.getLowestSetBit())>0&&e.rShiftTo(i,e),(i=n.getLowestSetBit())>0&&n.rShiftTo(i,n),e.compareTo(n)>=0?(e.subTo(n,e),e.rShiftTo(1,e)):(n.subTo(e,n),n.rShiftTo(1,n));return o>0&&n.lShiftTo(o,n),n}function bnpModInt(t){if(0>=t)return 0;var e=this.DV%t,n=0>this.s?t-1:0;if(this.t>0)if(0==e)n=this[0]%t;else for(var r=this.t-1;r>=0;--r)n=(e*n+this[r])%t;return n}function bnModInverse(t){var e=t.isEven();if(this.isEven()&&e||0==t.signum())return BigInteger.ZERO;for(var n=t.clone(),r=this.clone(),i=nbv(1),o=nbv(0),s=nbv(0),a=nbv(1);0!=n.signum();){for(;n.isEven();)n.rShiftTo(1,n),e?(i.isEven()&&o.isEven()||(i.addTo(this,i),o.subTo(t,o)),i.rShiftTo(1,i)):o.isEven()||o.subTo(t,o),o.rShiftTo(1,o);for(;r.isEven();)r.rShiftTo(1,r),e?(s.isEven()&&a.isEven()||(s.addTo(this,s),a.subTo(t,a)),s.rShiftTo(1,s)):a.isEven()||a.subTo(t,a),a.rShiftTo(1,a);n.compareTo(r)>=0?(n.subTo(r,n),e&&i.subTo(s,i),o.subTo(a,o)):(r.subTo(n,r),e&&s.subTo(i,s),a.subTo(o,a))}return 0!=r.compareTo(BigInteger.ONE)?BigInteger.ZERO:a.compareTo(t)>=0?a.subtract(t):0>a.signum()?(a.addTo(t,a),0>a.signum()?a.add(t):a):a}function bnIsProbablePrime(t){var e,n=this.abs();if(1==n.t&&n[0]<=lowprimes[lowprimes.length-1]){for(e=0;lowprimes.length>e;++e)if(n[0]==lowprimes[e])return!0;return!1}if(n.isEven())return!1;for(e=1;lowprimes.length>e;){for(var r=lowprimes[e],i=e+1;lowprimes.length>i&&lplim>r;)r*=lowprimes[i++];for(r=n.modInt(r);i>e;)if(0==r%lowprimes[e++])return!1}return n.millerRabin(t)}function bnpMillerRabin(t){var e=this.subtract(BigInteger.ONE),n=e.getLowestSetBit();if(0>=n)return!1;var r=e.shiftRight(n);t=t+1>>1,t>lowprimes.length&&(t=lowprimes.length);for(var i=nbi(),o=0;t>o;++o){i.fromInt(lowprimes[o]);var s=i.modPow(r,this);if(0!=s.compareTo(BigInteger.ONE)&&0!=s.compareTo(e)){for(var a=1;n>a++&&0!=s.compareTo(e);)if(s=s.modPowInt(2,this),0==s.compareTo(BigInteger.ONE))return!1;if(0!=s.compareTo(e))return!1}}return!0}function Arcfour(){this.i=0,this.j=0,this.S=[]}function ARC4init(t){var e,n,r;for(e=0;256>e;++e)this.S[e]=e;for(n=0,e=0;256>e;++e)n=255&n+this.S[e]+t[e%t.length],r=this.S[e],this.S[e]=this.S[n],this.S[n]=r;this.i=0,this.j=0}function ARC4next(){var t;return this.i=255&this.i+1,this.j=255&this.j+this.S[this.i],t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[255&t+this.S[this.i]]}function prng_newstate(){return new Arcfour}function rng_seed_int(t){rng_pool[rng_pptr++]^=255&t,rng_pool[rng_pptr++]^=255&t>>8,rng_pool[rng_pptr++]^=255&t>>16,rng_pool[rng_pptr++]^=255&t>>24,rng_pptr>=rng_psize&&(rng_pptr-=rng_psize)}function rng_seed_time(){rng_seed_int((new Date).getTime())}function rng_get_byte(){if(null==rng_state){for(rng_seed_time(),rng_state=prng_newstate(),rng_state.init(rng_pool),rng_pptr=0;rng_pool.length>rng_pptr;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(t){var e;for(e=0;t.length>e;++e)t[e]=rng_get_byte()}function SecureRandom(){}function parseBigInt(t,e){return new BigInteger(t,e)}function linebrk(t,e){for(var n="",r=0;t.length>r+e;)n+=t.substring(r,r+e)+"\n",r+=e;return n+t.substring(r,t.length)}function byte2Hex(t){return 16>t?"0"+t.toString(16):t.toString(16)}function pkcs1pad2(t,e){if(t.length+11>e)return alert("入力内容に誤りがあります。"),null;for(var n=[],r=t.length-1;r>=0&&e>0;)n[--e]=t.charCodeAt(r--);n[--e]=0;for(var i=new SecureRandom,o=[];e>2;){for(o[0]=0;0==o[0];)i.nextBytes(o);n[--e]=o[0]}return n[--e]=2,n[--e]=0,new BigInteger(n)}function RSAKey(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function RSASetPublic(t,e){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=parseBigInt(t,16),this.e=parseInt(e,16)):alert("Invalid RSA public key")}function RSADoPublic(t){return t.modPowInt(this.e,this.n)}function RSAEncrypt(t){var e=pkcs1pad2(t,this.n.bitLength()+7>>3);if(null==e)return null;var n=this.doPublic(e);if(null==n)return null;var r=n.toString(16);return 0==(1&r.length)?r:"0"+r}function RSAEncryptB64(t){var e=this.encrypt(t);return e?hex2b64(e):null}function pkcs1unpad2(t,e){for(var n=t.toByteArray(),r=0;n.length>r&&0==n[r];)++r;if(n.length-r!=e-1||2!=n[r])return null;for(++r;0!=n[r];)if(++r>=n.length)return null;for(var i="";++r<n.length;)i+=String.fromCharCode(n[r]);return i}function RSASetPrivate(t,e,n){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=parseBigInt(t,16),this.e=parseInt(e,16),this.d=parseBigInt(n,16)):alert("Invalid RSA private key")}function RSASetPrivateEx(t,e,n,r,i,o,s,a){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=parseBigInt(t,16),this.e=parseInt(e,16),this.d=parseBigInt(n,16),this.p=parseBigInt(r,16),this.q=parseBigInt(i,16),this.dmp1=parseBigInt(o,16),this.dmq1=parseBigInt(s,16),this.coeff=parseBigInt(a,16)):alert("Invalid RSA private key")}function RSAGenerate(t,e){var n=new SecureRandom,r=t>>1;this.e=parseInt(e,16);for(var i=new BigInteger(e,16);;){for(;this.p=new BigInteger(t-r,1,n),0!=this.p.subtract(BigInteger.ONE).gcd(i).compareTo(BigInteger.ONE)||!this.p.isProbablePrime(10););for(;this.q=new BigInteger(r,1,n),0!=this.q.subtract(BigInteger.ONE).gcd(i).compareTo(BigInteger.ONE)||!this.q.isProbablePrime(10););if(0>=this.p.compareTo(this.q)){var o=this.p;this.p=this.q,this.q=o}var s=this.p.subtract(BigInteger.ONE),a=this.q.subtract(BigInteger.ONE),u=s.multiply(a);if(0==u.gcd(i).compareTo(BigInteger.ONE)){this.n=this.p.multiply(this.q),this.d=i.modInverse(u),this.dmp1=this.d.mod(s),this.dmq1=this.d.mod(a),this.coeff=this.q.modInverse(this.p);break}}}function RSADoPrivate(t){if(null==this.p||null==this.q)return t.modPow(this.d,this.n);for(var e=t.mod(this.p).modPow(this.dmp1,this.p),n=t.mod(this.q).modPow(this.dmq1,this.q);0>e.compareTo(n);)e=e.add(this.p);return e.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)}function RSADecrypt(t){var e=parseBigInt(t,16),n=this.doPrivate(e);return null==n?null:pkcs1unpad2(n,this.n.bitLength()+7>>3)}var nj=nj||{};nj.account=nj.account||{},function(t){nj.account.crypto={_NAVER_RSA_KEYS:null,error:{rsa:"暗号化キーが取得できなかったためログイン処理を行えません。画面を更新するか再度時間をおいてアクセスして下さい。"},initRsaKeys:function(e,n,r){n=n||function(){},r=r||document.window},setRsaKeys:function(t){return nj.account.crypto.hasRsaKeys()?void 0:t?(nj.account.crypto._NAVER_RSA_KEYS=t,!0):(alert(nj.account.crypto.error.rsa),!1)},hasRsaKeys:function(){return null==nj.account.crypto._NAVER_RSA_KEYS?!1:!0},rsaEncrypt:function(t,e,n,r){if(!nj.account.crypto._NAVER_RSA_KEYS)return null;if(0==t.length)return"";e=e||!1,e&&(t=Base64.encode(t)),nj.account.crypto._NAVER_RSA_KEYS.session_key;var i=nj.account.crypto.getSplitRsaKey();n=n||i.evalue,r=r||i.nvalue;var o=new RSAKey;o.setPublic(n,r);var s=o.encrypt(t);return s},getSplitRsaKey:function(){var t=nj.account.crypto._NAVER_RSA_KEYS.rsa_key.split(",");if(!(3>t.length)){var e={keyname:t[0],evalue:t[1],nvalue:t[2]};return e}}}}(jQuery);var dbits,canary=0xdeadbeefcafe,j_lm=15715070==(16777215&canary);j_lm&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):j_lm&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=[],rr,vv;for(rr="0".charCodeAt(0),vv=0;9>=vv;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;36>vv;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1),NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],lplim=(1<<26)/lowprimes[lowprimes.length-1];BigInteger.prototype.chunkSize=bnpChunkSize,BigInteger.prototype.toRadix=bnpToRadix,BigInteger.prototype.fromRadix=bnpFromRadix,BigInteger.prototype.fromNumber=bnpFromNumber,BigInteger.prototype.bitwiseTo=bnpBitwiseTo,BigInteger.prototype.changeBit=bnpChangeBit,BigInteger.prototype.addTo=bnpAddTo,BigInteger.prototype.dMultiply=bnpDMultiply,BigInteger.prototype.dAddOffset=bnpDAddOffset,BigInteger.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger.prototype.modInt=bnpModInt,BigInteger.prototype.millerRabin=bnpMillerRabin,BigInteger.prototype.clone=bnClone,BigInteger.prototype.intValue=bnIntValue,BigInteger.prototype.byteValue=bnByteValue,BigInteger.prototype.shortValue=bnShortValue,BigInteger.prototype.signum=bnSigNum,BigInteger.prototype.toByteArray=bnToByteArray,BigInteger.prototype.equals=bnEquals,BigInteger.prototype.min=bnMin,BigInteger.prototype.max=bnMax,BigInteger.prototype.and=bnAnd,BigInteger.prototype.or=bnOr,BigInteger.prototype.xor=bnXor,BigInteger.prototype.andNot=bnAndNot,BigInteger.prototype.not=bnNot,BigInteger.prototype.shiftLeft=bnShiftLeft,BigInteger.prototype.shiftRight=bnShiftRight,BigInteger.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger.prototype.bitCount=bnBitCount,BigInteger.prototype.testBit=bnTestBit,BigInteger.prototype.setBit=bnSetBit,BigInteger.prototype.clearBit=bnClearBit,BigInteger.prototype.flipBit=bnFlipBit,BigInteger.prototype.add=bnAdd,BigInteger.prototype.subtract=bnSubtract,BigInteger.prototype.multiply=bnMultiply,BigInteger.prototype.divide=bnDivide,BigInteger.prototype.remainder=bnRemainder,BigInteger.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger.prototype.modPow=bnModPow,BigInteger.prototype.modInverse=bnModInverse,BigInteger.prototype.pow=bnPow,BigInteger.prototype.gcd=bnGCD,BigInteger.prototype.isProbablePrime=bnIsProbablePrime,Arcfour.prototype.init=ARC4init,Arcfour.prototype.next=ARC4next;var rng_psize=256,rng_state,rng_pool,rng_pptr;if(null==rng_pool){rng_pool=[],rng_pptr=0;var t;if("Netscape"==navigator.appName&&"5">navigator.appVersion&&window.crypto&&window.crypto.random){var z=window.crypto.random(32);for(t=0;z.length>t;++t)rng_pool[rng_pptr++]=255&z.charCodeAt(t)}for(;rng_psize>rng_pptr;)t=Math.floor(65536*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=255&t;rng_pptr=0,rng_seed_time()}SecureRandom.prototype.nextBytes=rng_get_bytes,RSAKey.prototype.doPublic=RSADoPublic,RSAKey.prototype.setPublic=RSASetPublic,RSAKey.prototype.encrypt=RSAEncrypt,RSAKey.prototype.encrypt_b64=RSAEncryptB64,RSAKey.prototype.doPrivate=RSADoPrivate,RSAKey.prototype.setPrivate=RSASetPrivate,RSAKey.prototype.setPrivateEx=RSASetPrivateEx,RSAKey.prototype.generate=RSAGenerate,RSAKey.prototype.decrypt=RSADecrypt;var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,n,r,i,o,s,a,u="",l=0;for(t=Base64._utf8_encode(t);t.length>l;)e=t.charCodeAt(l++),n=t.charCodeAt(l++),r=t.charCodeAt(l++),i=e>>2,o=(3&e)<<4|n>>4,s=(15&n)<<2|r>>6,a=63&r,isNaN(n)?s=a=64:isNaN(r)&&(a=64),u=u+this._keyStr.charAt(i)+this._keyStr.charAt(o)+this._keyStr.charAt(s)+this._keyStr.charAt(a);return u},decode:function(t){var e,n,r,i,o,s,a,u="",l=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");t.length>l;)i=this._keyStr.indexOf(t.charAt(l++)),o=this._keyStr.indexOf(t.charAt(l++)),s=this._keyStr.indexOf(t.charAt(l++)),a=this._keyStr.indexOf(t.charAt(l++)),e=i<<2|o>>4,n=(15&o)<<4|s>>2,r=(3&s)<<6|a,u+=String.fromCharCode(e),64!=s&&(u+=String.fromCharCode(n)),64!=a&&(u+=String.fromCharCode(r));return u=Base64._utf8_decode(u)},_utf8_encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;t.length>n;n++){var r=t.charCodeAt(n);128>r?e+=String.fromCharCode(r):r>127&&2048>r?(e+=String.fromCharCode(192|r>>6),e+=String.fromCharCode(128|63&r)):(e+=String.fromCharCode(224|r>>12),e+=String.fromCharCode(128|63&r>>6),e+=String.fromCharCode(128|63&r))}return e},_utf8_decode:function(t){for(var e="",n=0,r=c1=c2=0;t.length>n;)r=t.charCodeAt(n),128>r?(e+=String.fromCharCode(r),n++):r>191&&224>r?(c2=t.charCodeAt(n+1),e+=String.fromCharCode((31&r)<<6|63&c2),n+=2):(c2=t.charCodeAt(n+1),c3=t.charCodeAt(n+2),e+=String.fromCharCode((15&r)<<12|(63&c2)<<6|63&c3),n+=3);return e}};(function(t,e,n){function r(t){var e={},r=/^jQuery\d+$/;return n.each(t.attributes,function(t,n){n.specified&&!r.test(n.name)&&(e[n.name]=n.value)}),e}function i(t,r){var i=this,o=n(i);if(i.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id")),t===!0)return o[0].value=r;o.focus()}else i.value="",o.removeClass("placeholder"),i==e.activeElement&&i.select()}function o(){var t,e=this,o=n(e),s=this.id;if(""==e.value){if("password"==e.type){if(!o.data("placeholder-textinput")){try{t=o.clone().attr({type:"text"})}catch(a){t=n("<input>").attr(n.extend(r(this),{type:"text"}))}t.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":s}).bind("focus.placeholder",i),o.data({"placeholder-textinput":t,"placeholder-id":s}).before(t)}o=o.removeAttr("id").hide().prev().attr("id",s).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}var s,a,u="placeholder"in e.createElement("input"),l="placeholder"in e.createElement("textarea"),c=n.fn,p=n.valHooks;u&&l?(a=c.placeholder=function(){return this},a.input=a.textarea=!0):(a=c.placeholder=function(){var t=this;return t.filter((u?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":i,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),t},a.input=u,a.textarea=l,s={get:function(t){var e=n(t);return e.data("placeholder-enabled")&&e.hasClass("placeholder")?"":t.value},set:function(t,r){var s=n(t);return s.data("placeholder-enabled")?(""==r?(t.value=r,t!=e.activeElement&&o.call(t)):s.hasClass("placeholder")?i.call(t,!0,r)||(t.value=r):t.value=r,s):t.value=r}},u||(p.input=s),l||(p.textarea=s),n(function(){n(e).delegate("form","submit.placeholder",function(){var t=n(".placeholder",this).each(i);setTimeout(function(){t.each(o)},10)})}),n(t).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery),function(t,e){"use strict";lc.getPackage("lc.line.web.login.resetPassword",function(t){this._init(t)}),lc.line.web.login.resetPassword.prototype={opts:{password:"#FnPassword",confirm:"#FnConfirmPassword",submit:"#FnSubmit",counter:".mdInput01Count",min:6,max:20,msg:{}},_init:function(t){this.opts=e.extend({},this.opts,t),this.$password=e(this.opts.password),this.$confirm=e(this.opts.confirm),this.$submit=e(this.opts.submit),this._bindEvent(),this._setPlaceholder(),this._checkChanged(),this._checkDisabled()},_checkChanged:function(){this.opts.changed&&t.confirm(this.opts.msg.changed)&&(t.location.href=this.opts.landing)},_setPlaceholder:function(){e("input[type=password]").placeholder()},_bindEvent:function(){var t=this;e("input[type=password]").on("keyup change input",function(){t._checkDisabled()}).on("focus",function(){e(this).closest(".MdInput01").addClass("ExSelected")}).on("blur",function(){e(this).closest(".MdInput01").removeClass("ExSelected")}),e("input[type=submit]").on("click",function(n){n.preventDefault(),t._validate()&&(e(t.opts.counter).find("em").text(0),t._submit())}),this.$password.on("keyup change input",function(){t._updateCount()}),setTimeout(function(){t._updateCount()},300)},_getLenChar:function(t){return t+="",String.fromCharCode(t.length)},_submit:function(){var t=this;return this.requesting?!1:(this.requesting=!0,nj.account.crypto._NAVER_RSA_KEYS=null,nj.account.crypto.initRsaKeys(this.opts.rsaUrl+"?_="+(new Date).getTime(),function(){if(!nj.account.crypto.hasRsaKeys())return t._showError(t.opts.msg.server),t.requesting=!1,!1;var n=e("#rsaKeyName"),r=nj.account.crypto._NAVER_RSA_KEYS.session_key,i=nj.account.crypto.getSplitRsaKey();n.val(i.keyname);var o=t._getLenChar(r)+r+t._getLenChar(n.val())+n.val()+t._getLenChar(t.$password.val())+t.$password.val(),s=nj.account.crypto.rsaEncrypt(o),a=e("#ipt_login_param_encrypt");
return a.val(s),t.$password.attr("disabled","disabled"),t.$confirm.attr("disabled","disabled"),""===a.val()?(t.$password.attr("disabled","").val(""),t.$confirm.attr("disabled","").val(""),t.requesting=!1,!1):(t.$submit.closest("form").submit(),void 0)},function(){this.requesting=!1}),void 0)},_updateCount:function(){if(this.$password.length){var t=this.$password.val().length;e(this.opts.counter).find("em").text(t)}},_checkDisabled:function(){this.$password.val()&&this.$confirm.val()?this.$submit.parent().removeClass("ExDisabled"):this.$submit.parent().addClass("ExDisabled")},_validate:function(){return this.$submit.parent().hasClass("ExDisabled")?!1:this.$password.val().length<this.opts.min||this.opts.max<this.$password.val().length?(this._showError(this.opts.msg.length),!1):this.$password.val()!==this.$confirm.val()?(this._showError(this.opts.msg.match),!1):!0},_showError:function(e){t.alert(e)}}}(window,jQuery);