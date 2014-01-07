Coming soon.

You have to apply this patch yourself after installing packages via bower until foundation 5.0.3 gets released.

https://github.com/seantimm/foundation/commit/d98a7d540ee764e79d2dbadc0e2617964207a53c

Execute the following to apply the patch to the `vendor/foundation/js/foundation.js` file:

    curl http://git.io/N4xapA |sed "s/js\/foundation/vendor\/foundation\/js/g" |g apply
