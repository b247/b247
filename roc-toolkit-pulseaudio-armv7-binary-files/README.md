""Cross compile pulseaudio roc modules for armv7 devices (eg RPi 3)""


"" https://roc-streaming.org/toolkit/docs/portability/cross_compiling.html#linaro-armv7-32-bit-toolchain  - install the toolchain manually""

TOOLCHAIN_DIR=/home/catalin/Downloads/roc-gcc
ROC_DIR=/home/catalin/Downloads/roc-toolkit

export PATH="${TOOLCHAIN_DIR}/gcc-linaro-7.4.1-2019.02-x86_64_arm-linux-gnueabihf/bin:${PATH}"

apt-get install g++ scons ragel gengetopt

apt-get install libtool autoconf automake make cmake

wget http://releases.linaro.org/components/toolchain/binaries/7.4-2019.02/arm-linux-gnueabihf/gcc-linaro-7.4.1-2019.02-x86_64_arm-linux-gnueabihf.tar.xz
tar -C "${TOOLCHAIN_DIR}" -Jf gcc-linaro-7.4.1-2019.02-x86_64_arm-linux-gnueabihf.tar.xz
export PATH="${TOOLCHAIN_DIR}/gcc-linaro-7.4.1-2019.02-x86_64_arm-linux-gnueabihf/bin:${PATH}"

cd "${ROC_DIR}"
scons -Q \
	--enable-pulseaudio-modules \
	--host=arm-linux-gnueabihf \
	--build-3rdparty=libuv,libunwind,openfec,alsa,pulseaudio:10.0,sox,cpputest


Resulted (or downloaded) binary files shall be placed on RPi (arm device) as follow:

local libroc.so.*.* goes to RPi on /usr/lib/
local module-roc-* goes to RPi on /usr/lib/pulse-10.0/modules/


10.0 is the pulseaudio version used in RPi (pulseaudio --version)